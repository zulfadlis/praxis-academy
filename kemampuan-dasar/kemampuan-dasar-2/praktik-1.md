# Praktik Markdown

```sh 
agus@agus-PC /cygdrive/d
$ cd fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2
$ ls

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2
$ mkdir rhymes

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2
$ cd rhymes/

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git init
Initialized empty Git repository in D:/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes/.git/

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ touch README.txt

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git add README.txt

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git commit -m "first commit."

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'agus@agus-PC.(none)')

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git configg --global user.email "ipay48@gmail.com"
git: 'configg' is not a git command. See 'git --help'.

The most similar command is
        config

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git configg --global user.email ipay48@gmail.com
git: 'configg' is not a git command. See 'git --help'.

The most similar command is
        config

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git config --global user.email ipay48@gmail.com

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git config --global user.name zulfadli

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes

$ git commit -m "first commit."
[master (root-commit) c46dd75] first commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git commit -m 'Added project overview to README.txt'
[master 1706d2f] Added project overview to README.txt
 1 file changed, 1 insertion(+)
 
agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
--2020-08-15 08:07:22--  https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-08-15 08:07:26 ERROR 404: Not Found.


agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
--2020-08-15 08:08:34--  https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
Resolving www.acquia.com (www.acquia.com)... failed: The requested name is valid, but no data of the requested type was found. .
wget: unable to resolve host address 'www.acquia.com'

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
--2020-08-15 08:09:17--  https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-08-15 08:09:21 ERROR 404: Not Found.


agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
--2020-08-15 08:09:37--  https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-08-15 08:09:38 ERROR 404: Not Found.


agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
--2020-08-15 08:09:44--  https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2020-08-15 08:09:46 ERROR 404: Not Found.


agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git log
commit 1706d2fc77fb98f22bdda417c2acca94160702f4 (HEAD -> master)
Author: zulfadli <ipay48@gmail.com>
Date:   Sat Aug 15 06:50:27 2020 +0100

    Added project overview to README.txt

commit c46dd75b7bebd4fd3c60c282abf4f2a492cbf2ed
Author: zulfadli <ipay48@gmail.com>
Date:   Sat Aug 15 06:49:35 2020 +0100

    first commit.

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git remote add origin https://github.com/zulfadlis/praxis-academy

agus@agus-PC /cygdrive/d/fadli/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes
$ git push -u origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 496 bytes | 496.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/zulfadlis/praxis-academy
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
````