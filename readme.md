# WP Plugin Release Tools

These tools can be used to simplify those tasks, you always have to to,
when releasing a new version of a WP plugin to the official SVN plugin repository

## Preparation

Just clone this repo (or download it) and place it in a folder next to your plugin project folder. You should than edit the file `Gruntfile.js` and set the `github_username` variable. You should change the file `deploy.sh` and set your `default_svnuser`, so you can choose this default value. You also need to have [Git](http://git-scm.com/) and [SVN](https://subversion.apache.org/) installed.

```txt
development_root_folder
├── first_wordpress_plugin
├── second_wordpress_plugin
├── wp-plugin-release-tools
```
 
## Howto

There are some steps, you usually do for every release:

1. Update the version number in the `readme.txt` and in the plugin's main PHP file
2. Update the changelog
3. Copy the new content from the `readme.txt` into the `readme.md` file (used for Github/Bitbucket/etc.)
4. Commit those changes with Git
5. Create a new tag in the Git repo
6. Update the `asset` folder within the SVN plugin repository
7. Commit the changes into `trunk` in the SVN repo
8. Create a new tag in the SVN repo 

Most of the steps can be completed with only two little helper script.
While you have to perform steps 1 and 2, the first script will automate step 3 for you.
It uses the Grunt task [grunt-wp-readme-to-markdown](https://github.com/stephenharris/wp-readme-to-markdown)
from [Stephen Harris](https://github.com/stephenharris).

In order to use it, you have to install [node.js](https://www.npmjs.org/) and [Grunt](http://gruntjs.com/) and run `npm install grunt --save-dev` in the `wp-plugin-release-tools` folder.

After those setups has been completed (you only have to do this once), you can simply run the following command:

```bash
grunt readme --plugin="first_wordpress_plugin"
```

This will update the `readme.md` file with the content from the `readme.txt` file. You may then want to commit those changes to Github (step 4).

For all the remaining steps 5 - 8, you can use the `deploy.sh` script from [Gary Jones](https://github.com/GaryJones) which I change a bit from his [original deploy script](https://github.com/GaryJones/wordpress-plugin-git-flow-svn-deploy). Just execute it in your `bash` (for Windows users: You can use the `git bash` for that):

```
deploy.sh
```

This script will guide you though the deploy process and asks you some questions. But if you set the SVN username and you folder structure is like the one above, the only realy questions should be the one about the plugin's slug.

That's it! The next time you release a new version, it's as easy as running those two commands. All the hassle with the SVN repo is gone :)