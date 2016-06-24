brew install imagesnap
cp  -r . ~/.vibeguru
cd ~/.vibeguru
npm install

mkdir ~/.vibe-git-template
cp -r hooks ~/.vibe-git-template/
git config --global init.templatedir '~/.vibe-git-template'
