/// <reference path="vendor/jquery-1.11.3.min.js" />
/// <reference path="vendor/moment.min.js" />

(function () {
    var GitHubActivityDownloader;

    GitHubActivityDownloader = (function () {
        function GitHubActivityDownloader() { }

        GitHubActivityDownloader.prototype.download = function (resolve) {
            return jQuery.getJSON('https://api.github.com/orgs/chaos4ever/events?per_page=30', '', (function (_this) {
                return function (result) {
                    var events;
                    events = _this.postprocessEvents(result);
                    return resolve(events);
                };
            })(this));
        };

        GitHubActivityDownloader.prototype.postprocessEvents = function (events) {
            events.forEach(function (event) {
                var issue, pull_request;
                event.repo.shortName = event.repo.name.replace('chaos4ever/', '');
                event.isPushEvent = event.type === 'PushEvent';
                event.isPullRequestEvent = event.type === 'PullRequestEvent';
                event.isIssueCommentevent = event.type === 'IssueCommentEvent';
                event.created_at_from_now = moment(event.created_at).fromNow();
                event.created_at = moment(event.created_at).format('YYYY-MM-DD HH:mm:ss Z');

                if (event.isPullRequestEvent) {
                    event.octicon = 'git-pull-request';
                    pull_request = event.payload.pull_request;
                    event.branch = pull_request.head.ref;
                    event.url = pull_request.html_url;
                    event.pullRequestNumber = pull_request.number;
                    event.pullRequestTitle = pull_request.title;
                    event.action = pull_request.merged ? 'merged' : event.payload.action;
                }
                else if (event.isIssueCommentevent) {
                    event.octicon = 'comment-discussion';
                    issue = event.payload.issue;
                    event.issueNumber = issue.number;
                    event.issueTitle = issue.title;
                    event.url = event.payload.comment.html_url;
                }
            });

            return events.filter(function (e) {
                return e.isPullRequestEvent || e.isIssueCommentevent;
            });
        };

        return GitHubActivityDownloader;

    })();

    new GitHubActivityDownloader().download(function (events) {
        var template = Handlebars.templates['github-activity.hbs'];
        $('#github-activity').html(template({
            events: events
        }));
    });

}).call(this);

function toggleMenu() {
    var x = document.getElementById('topmenu-mobile');

    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'block';
    }
}
