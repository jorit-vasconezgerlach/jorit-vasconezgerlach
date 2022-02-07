## Git Reposetory Important Commands
#### Git global setup
```
git config --global user.name "Jorit Vásconez Gerlach"
git config --global user.email "jorit@vasconezgerlach.de"
```
#### Connect to an local existing folder
```
cd {Existing Folder Root}
git init
git remote add origin https://gitlab.com/{GitLab Username}/{GitLab Project}.git
git pull origin main
```
add README.md
```
echo "# fs" >> README.md 
git add README.md
```
commit everything
```
git add .
git commit -m "{Commit Description}"
git push -u origin main
```
#### Clone from GitLab to local
```
cd {Folder To Download Project Folder In}
git clone https://gitlab.com/{GitLab Username}/{GitLab Project}.git
```

## Commit Commands
#### Close issue
```
Close #16
```
16 stands for the issue number
