### .gitignore universal setup one-liner

    touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

----

### deploy to ghpages from app/src

    git subtree push --prefix app/src origin gh-pages


----