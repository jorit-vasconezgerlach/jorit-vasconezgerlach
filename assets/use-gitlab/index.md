## Git Repo Commands
####Git global setup
```
git config --global user.name "Jorit Vásconez Gerlach"
git config --global user.email "jorit@vasconezgerlach.de"
```
####Create a new repository
```
git clone https://gitlab.com/{GitLab Username}/{GitLab Project}.git
cd test-project
git switch -c main
touch README.md
git add README.md
git commit -m "add README"
git push -u origin main
```
####Push an existing folder
```
cd existing_folder
git init --initial-branch=main
git remote add origin https://gitlab.com/{GitLab Username}/{GitLab Project}.git
git add .
git commit -m "Initial commit"
git push -u origin main
```
####Push an existing Git repository
```
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/{GitLab Username}/{GitLab Project}.git
git push -u origin --all
git push -u origin --tags
```

## Commit Commands
#### Close Issue
```
Close #16
```
16 stands for the issue number
