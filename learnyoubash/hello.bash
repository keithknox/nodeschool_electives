#
# # Learn Bash
#
# ## HELLO WORLD (Exercise 1 of 11)
#
#    _                                         _               _
#   | | ___  __ _ _ __ _ __  _   _  ___  _   _| |__   __ _ ___| |__
#   | |/ _ \/ _` | '__| '_ \| | | |/ _ \| | | | '_ \ / _` / __| '_ \
#   | |  __/ (_| | |  | | | | |_| | (_) | |_| | |_) | (_| \__ \ | | |
#   |_|\___|\__,_|_|  |_| |_|\__, |\___/ \__,_|_.__/ \__,_|___/_| |_|
#                            |___/
#
# Welcome in learnyoubash!
#
# This workshopper is completely based on the bash-handbook:
#
# <https://github.com/denysdovhan/bash-handbook>
#
# ### What is Bash?
#
# Bash is a Unix shell written by Brian Fox for the GNU Project as a free
# software replacement for the [Bourne shell](https://en.wiki
# pedia.org/wiki/Bourne_shell). It was released in 1989 and has been
# distributed as the Linux and OS X default shell for a long time. Today,
# Bash is one of the most powerful and portable tools for writing efficient
# scripts for all Unix-based systems. So let's get started!
#
# ### Interactive and non-interactive modes
#
# Bash may work in two different modes: interactive and non-interactive.
#
# Just now you're interacting with this workshopper using commands, for
# example learnyoubash. This is an interactive mode. Here you can enter a
# variety of Unix commands, such as ls, grep, cd, mkdir, rm and see the
# result of their execution.
#
# In non-interactive mode, the shell reads commands from a file or a pipe
# and executes them. The exercises in this workshopper will teach you how to
# write simple scripts using Bash.
#
# ### What is the script?
#
# A script is just a regular text file that consists of commands the shell
# interpreter can evaluate using bash shell's interpreter program. The
# commands are just regular command which you can use from interactive mode
# too.
#
# Create your first script using touch command:
#
#   touch hi.bash
#
# The touch command creates an empty file in your current directory.
#
# Now you can simplify invoking the script by making it an executable file
# using the chmod command:
#
#   chmod +x hi.bash
#
# Additionally, the first line in the script must indicate which program it
# should use to run the file, like so:
#
#   #!/usr/bin/env bash
#
#   echo "Hi!"
#
# This #!/usr/bin/env bash character sequence is known as the
# [shebang](http://en.wikipedia.org/wiki/Shebang_%28Unix%29). Now you can
# run script like this:
#
#   ./hi.bash
#
# Another handy thing we learned above is using the echo to print something
# to the terminal screen.
#
# ## THE CHALLENGE
#
# Create a file named hello.bash (prefer to use touch).
#
# That file should contain a command which output:
#
#   Hello, world!
#
# ─────────────────────────────────────────────────────────────────────────────
#
# » To print these instructions again, run: learnyoubash print
# » To execute your program in a test environment, run: learnyoubash run
#   program.js
# » To verify your program, run: learnyoubash verify program.js
# » For help run: learnyoubash help

#!/usr/bin/env bash

echo "Hello, world!"


# Here's the official solution in case you want to compare notes:
#
# # You did it!
#
# Gongratulations! You wrote your first bash script! Quite simple, isn't it?
#
# By the way, pay your attention to whoami command. This command prints your
# username. That means you can do something like this:
#
#   #!/usr/bin/env bash
#
#   echo "Hello, $(whoami)!"
#
# This script will greet you personally.
#
# Besides, if you have problems with any command, you always can read manual
# about the command using man command. This command work well with any Unix
# command and will be your handy guide in Bash world. For example:
#
#   man pwd
#
# Additionally, almost every command has a --help flag, that show simple
# how-to message for you. Use this flag like this:
#
#   pwd --help
#
# In the next exercise we will take a look at variables.
#
# You have 9 challenges left. Type 'learnyoubash' to show the menu.
