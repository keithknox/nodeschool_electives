#
# # Learn Bash
#
# ## ARRAYS (Exercise 4 of 11)
#
# If you already familiar with arrays in other programming languages, you
# won't be surprised.
#
# An array in bash is a variable that allows you to refer to multiple
# values. In bash, arrays are also zero-based, this is, the first element in
# an array has index 0.
#
# When dealing with arrays, we should be aware of the special environment
# variable IFS. IFS or Input Field Separator — is the character that
# separates elements in an array. The default value is an empty space IFS='
# '.
#
# ### Array declaration
#
# In bash you create an array by simply assigning a value to an index in the
# array variable:
#
#   fruits[0]=Apple
#   fruits[1]=Pear
#   fruits[2]=Plum
#   echo ${fruits[*]} # echo ${fruits[@]} may be used as well
#
# Array variables can also be created using compound assignments such as:
#
#   fruits=(Apple Pear Plum)
#
# ### Array slice
#
# Besides, we can extract a slice of array using the slice operators:
#
#   echo ${fruits[*]:0:2} # Apple Pear
#   echo ${@:1:2} # slice of positional parameters
#
# In the example above, fruits[*] returns the entire contents of the array,
# and :0:2 extracts the slice of length 2, that starts at index 0.
#
# ### Adding elements into an array
#
# Adding elements into an array is quite simple too. Compound assignments
# are specially useful in this case. We can use them like this:
#
#   fruits=(Orange ${fruits[*]} Banana Cherry)
#   echo ${fruits[*]} # Orange Apple Pear Plum Banana Cherry
#
# The example above, fruits[*] the entire contents of the array and
# substitutes it into the compound assignment, then assigns the new value
# into the fruits array mutating its original value.
#
# ### Deleting elements from an array
#
# To delete an element from an array, use the unset command:
#
#   unset fruits[0]
#   echo ${fruits[*]} # Apple Pear Plum Banana Cherry
#
# ## THE CHALLENGE
#
# Create a file named arrays.bash.
#
# Through positional parameters into your script will be passed few values.
# As you already know, all parameters which were passed into script are
# stored in $* and $@ variables. These variables are nothing else than
# arrays.
#
# You should take slice of elements from the second to third (eventually two
# items). Save this elements to new array. Add to the beginning of array two
# new items I and am. Add to the ending of the array two items: and and
# fourth positional argument.
#
# Output all elements of array.
#
# For example, if you run your script with these arguments:
#
#   ./arrays.bash awesome cool strong cute awesome
#
# The script must output this:
#
#   I am cool strong and cute
#
# ─────────────────────────────────────────────────────────────────────────────
#
# » To print these instructions again, run: learnyoubash print
# » To execute your program in a test environment, run: learnyoubash run
#   program.js
# » To verify your program, run: learnyoubash verify program.js
# » For help run: learnyoubash help

#1/usr/bin/env bash

      echo I am ${@:2:2} and ${@:4:1}
     # 
     #  # PASS Your solution to ARRAYS passed!
     #
     #  Here's the official solution in case you want to compare notes:
     #
     # # Awesome!
     #
     #  Now you know how to deal with arrays in Bash. They are handy for storing
     #  collections of data. For example, you may use arrays for saving the list
     #  of enabled plugins or commands which must be executed.
     #
     #  In previous exercises you have learned how to get your current directory
     #  using pwd. You may want to change current directory. You can do this using
     #  cd command such as:
     #
     #     cd ~/Projects/my-awesome-project
     #
     #  If you try to execute this command you will change your current directory
     #  to ~/Projects/my-awesome-project if this directory exists.
     #
     #  Run man cd to get know more about this useful command.
     #
     #  In the next exercise we will take a look at variables.
     #
     #  You have 7 challenges left. Type 'learnyoubash' to show the menu.
