// Code your solutions in this file
let new_array=[];
const _names=["Guadalupe", "Ollie", "Aki"]
function writeCards(_names, event="surprise")
{
    for(let i=0;i<_names.length;i++)
    {
        new_array.push(`Thank you, ${_names[i]}, for the wonderful ${event} gift!`);
    }
    return new_array;
}

function countDown(_number=10)
{
    while(_number>-1)
    {
        console.log(_number);
        _number-=1;
    }
}