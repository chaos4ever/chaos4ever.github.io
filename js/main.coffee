---
---

class GitHubActivityDownloader
  download: (resolve) ->
    jQuery.getJSON 'https://api.github.com/orgs/chaos4ever/events?per_page=30', '', (result) =>
      events = @postprocessEvents(result)
      resolve(events)

  postprocessEvents: (events) ->
    events.forEach (event) ->
      event.repo.shortName = event.repo.name.replace('chaos4ever/', '')
      event.isPushEvent = event.type == 'PushEvent'
      event.isPullRequestEvent = event.type == 'PullRequestEvent'
      event.isIssueCommentevent = event.type == 'IssueCommentEvent'
      event.created_at_from_now = moment(event.created_at).fromNow()
      event.created_at = moment(event.created_at).format('YYYY-MM-DD HH:mm:ss Z')

      if event.isPushEvent
        event.octicon = 'git-commit'
        event.branch = event.payload.ref.replace('refs/heads/', '')
        event.numberOfCommits = event.payload.distinct_size
        event.numberOfCommitsSuffix = if event.numberOfCommits > 1 then 's' else ''
      else if event.isPullRequestEvent
        event.octicon = 'git-pull-request'
        pull_request = event.payload.pull_request
        event.branch = pull_request.head.ref
        event.url = pull_request.html_url
        event.pullRequestNumber = pull_request.number
        event.pullRequestTitle = pull_request.title
        event.action = if pull_request.merged then 'merged' else event.payload.action
      else if event.isIssueCommentevent
        event.octicon = 'comment-discussion'
        issue = event.payload.issue
        event.issueNumber = issue.number
        event.issueTitle = issue.title
        event.url = issue.html_url
    events.filter (e) -> e.isPushEvent || e.isPullRequestEvent || e.isIssueCommentevent

new GitHubActivityDownloader().download (events) ->
  template = Handlebars.templates['github-activity.hbs']
  $('#github-activity').html(template(events: events))
