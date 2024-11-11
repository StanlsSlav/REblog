# robot[1]: find key

## Author
not_a_robot

## Description
You need to understand key check formula and find the correct one!

## Language
C/C++

## Upload Date
11/13/2022

## Platform
Unix/linux etc.

## Difficulty
2

## Quality
4.5

## Arch
x86-64

## Solution
Checking down on the last jump op we’ll find, with a debugger, that the value from `[rbp+var_A0]` is exactly our user input and in `eax` is stored the hexadecimal value of an ASCII character.

```assembly
cmp     [rbp+var_A0], eax ; Compare Two Operands
jnz     short loc_55AA77091808 ; Jump if Not Zero (ZF=0)
```

Adjusting the key to match all those 4 characters results in the correct key.

## Answer
`0b2d`
