# Caesar cipher

## How to use

1. Clone this repository  
   `git clone https://github.com/mahtishavaev/caesar-cipher.git`

2. Install dependencies  
   `npm install`

3. Run CLI tool  
   `node caesar-cli <options>`

## Options list

1.  **-s, --shift**: a shift(required). Any integer, including negative.
2.  **-a, --action**: an action encode/decode(required).
3.  **-i, --input**: path to input file(optional).
4.  **-o, --output**: path to output file(optional).

## Examples

1. `node caesar-cli -a encode -s 18`
2. `node caesar-cli -a encode -s 51 -i input.txt -o output.txt`
3. `node caesar-cli --action encode --shift 51 --input input.txt --output output.txt`
