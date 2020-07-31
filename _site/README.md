# chaos4ever.github.io

Web site for chaos development. Uses the [Jekyll](http://jekyllrb.com/) engine.

## Repository structure

- `src` branch: Holds the source code for the web site.
- `master` branch: Holds the "compiled" version of the web site, that is published to e.g. http://chaosdev.io and http://chaos4ever.github.io

## Running the site locally

```shell
$ bundle install # Presumes you have Ruby and Bundler installed.
$ bundle exec jekyll serve -w
```

## Deployments

To publish updated versions of the site, use the `publish.sh` script. It makes certain rough assumptions of the folder structured on your machine; see the script for the full details.
