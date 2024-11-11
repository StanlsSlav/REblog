# Just In Time

## Author
skibur

## Description
This is my first attempt to create a simple challenge. It’s nothing to crazy, but I hope it’s good enough to keep you engaged.
Guess the password and explain how you cracked it.
Enjoy!

## Language
C/C++

## Upload Date
01/16/2023

## Platform
Unix/linux etc.

## Difficulty
2

## Quality
4

## Arch
x86-64

## Solution
Password must be of length 13 and follow all these conditions

```c
return input[3] != 107
      || 4 * (char)input[11] != 196
      || 4 * (char)input[5] != 228
      || input[12] != 70
      || (char)input[7] << v2 != 246
      || (char)input[1] << v2 != 200
      || (char)input[13] << v2 != 104
      || 4 * (char)input[8] != 184
      || *input != 37
      || (char)input[2] << v2 != 212
      || input[9] != 102
      || input[6] != 94
      || (char)input[10] << v2 != 128
      || (char)input[4] << v2 != 80
```

Organizing it a bit results into

```c
return
    || *input != 37
		|| (char)input[1] << v2 != 200
		|| (char)input[2] << v2 != 212
		||input[3] != 107
    || (char)input[4] << v2 != 80
    || 4 * (char)input[5] != 228
    || input[6] != 94
    || (char)input[7] << v2 != 246
    || 4 * (char)input[8] != 184
    || input[9] != 102
    || (char)input[10] << v2 != 128
	  || 4 * (char)input[11] != 196
    || input[12] != 70
    || (char)input[13] << v2 != 104
```

Now figuring all those characters might be a pain in the buttocks, however a bit of code would do, this will print all the characters multiplied by 4.

```c
for (int i = 9; i < 100; i++)
{
    int nr = i * 4;
    printf("%d [-] original: %c [-] mul: %c\n", nr, i, nr);
}
```

Which if we start making out the result we’ll result with

```c
*input != '%'
input[1] != ''
input[2] != ''
input[3] != 'k'
input[4] != ''
input[5] != '9'
input[6] != '^'
input[7] != ''
input[8] != '.'
input[9] != 'f'
input[10] != ''
input[11] != '1'
input[12] != 'F'
input[13] != ''
// This is a part of the answer!
```

Now all that’s left is to do the left bit shift.
