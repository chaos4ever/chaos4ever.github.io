#!/bin/bash

set -e

GIT_LAST_COMMIT=$(git rev-parse --short HEAD)
PUBLISH_FOLDER=../chaos4ever.github.io-publish

bundle exec rake
bundle exec jekyll build

pushd $PUBLISH_FOLDER
git pull -r
popd

rsync -gloprtv _site/ $PUBLISH_FOLDER

pushd $PUBLISH_FOLDER
git add -A .
git commit -m "Regenerated, based on $GIT_LAST_COMMIT."
git push
popd

