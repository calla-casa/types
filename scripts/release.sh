#!/bin/bash

set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo

VERSION=$VERSION npm run build

git add .
git commit -m "build: build $VERSION"

npm version "$VERSION" --message "build: release $VERSION"

git push origin refs/tags/v"$VERSION"
git push

npm publish
