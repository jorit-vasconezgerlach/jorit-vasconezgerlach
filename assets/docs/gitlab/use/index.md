## GitLab Platform Shortcuts

#### Most useful commands for WebApp
`?` Show all commands

`Shift` + `i` Open your issue overview
`Shift` + `p` Open your project overview
`Shift` + `m` Open your merge request overview
`Shift` + `t` Open your to-do list

**Navigation (In project)**
`i` New issue in project
`t` Go to find file

More
`g` then `i` Go to issues
`g` then `m` Go to merge requests
`g` then `w` Go to wiki
`g` then `b` Go to issue board
`g` then `c` Go to commits
`g` then `r` Go to releases
`g` then `f` Go to files

**Editing (In inputs)**
`command` + `b` Bold text
`command` + `i` Italic text
`command` + `k` Link text
`command` + `p` Toggle preview
`command` + `shift` + `s` Strikethrough text

**On issue**
`r` Comment or reply
`a` Change assignee
`l` Change label

## Git Repository Important Commands

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