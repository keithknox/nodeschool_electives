#
# # Learn Bash
#
# ## VARIABLES (Exercise 2 of 11)
#
# Like in most programming languages, you can also create variables in bash.
#
# Bash knows no data types. Variables can contain only numbers or a string
# of one or more characters. There are three kinds of variables you can
# create: local variables, environment variables and variables as positional
# arguments.
#
# ### Local variables
#
# Local variables are variables that exist only within a single script. They
# are inaccessible to other programs and scripts. A local variable can be
# declared using = sign (as a rule, there should not be any spaces between a
# variable's name, = and its value) and its value can be retrieved using the
# $ sign. For example:
#
#   foo="value"  # declare variable
#   echo $foo    # display value
#   unset foo    # delete variable
#
# The variables can be used inside strings. But there is an important
# difference between double and single quotes. Inside double quotes
# variables are expanded. Inside single quotes they are not. For example:
#
#   NAME="Denys"
#   echo "My name is $NAME" #> My name is Denys
#   echo 'My name is $NAME' #> My name is $NAME
#
# ### Environment variables
#
# Sometimes we need to declare variables which will be accessible from
# outside in current shell session, for other programs, script, etc. These
# variables are called environment variables. They are created just like
# local variables, but using the keyword export instead.
#
#   export GLOBAL_VAR="I am a global variable"
#
# There are a lot of global variables in bash. You will meet these variables
# fairly often, so here is a quick lookup table with the most practical
# ones:
#
# Variable Description
# -------- ----------------------------------------------------------------------------
# $HOME    The current user's home directory.
# $USER    The current user.
# $PATH    A colon-separated list of directories in which the shell looks for commands.
# $PWD     The current working directory.
# $RANDOM  Random integer between 0 and 32767.
# $UID     The numeric, real user ID of the current user.
# $PS1     The primary prompt string.
# $PS2     The secondary prompt string.
#
# You may find extended list of environment variables in Bash:
#
# <http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html#sect_03_02_
# 04>
#
# ## THE CHALLENGE
#
# Create a file named variables.bash (of course using touch).
#
# Your program should output your current username and directory name in
# following format:
#
#   User <username> in directory <directory>.
#
# ─────────────────────────────────────────────────────────────────────────────
#
# » To print these instructions again, run: learnyoubash print
# » To execute your program in a test environment, run: learnyoubash run
#   program.js
# » To verify your program, run: learnyoubash verify program.js
# » For help run: learnyoubash help

#!/usr/bin/env bash

echo "User $(whoami) in directory $(pwd)."

# PASS Your solution to VARIABLES passed!
#
#  Here's the official solution in case you want to compare notes:
#
# # Awesome!
#
#  Okay, you've done this!
#
#  Variables is very important part of any programming language and now you
#  know how it works in Bash.
#
#  In this exercise you used $PWD variable. In addition, there is also pwd
#  command which return the same as $PWD. So remember, when you need to get
#  current directory name, use pwd command or $PWD variable:
#
#     pwd        #> /Users/username/learnyoubash/variables/
#     echo $PWD  #> /Users/username/learnyoubash/variables/
#
#  Here above you may notice special strings which starts from # sign. Do you
#  know what it is? It's comments.
#
#  Comments are special statements ignored by the shell interpreter. They
#  begin with a # symbol and continue on to the end of the line.
#
#  For example:
#
#     #!/bin/bash
#     # This script will print your username.
#     whoami
#
#  Use comments to explain what your script does and why.
#
#  In the next exercise we will use positional parameters. We will learn how
#  to handle the arguments which may be passed to your program.
#
#  You have 9 challenges left. Type 'learnyoubash' to show the menu.
