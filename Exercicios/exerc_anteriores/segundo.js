console.log('1')
fl()
console.log('3')

function fl(){
    console.log('2')
}

console.log('------')

console.log('1')
ft()
console.log('3')

function ft(){
    setTimeout(function(){
        console.log('2');
    },10)
}
