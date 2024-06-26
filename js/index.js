let quotes=[{'author': ' Oscar Wilde',
 'quote':'“Be yourself; everyone else is already taken.”'},
{'author':'“― Marilyn Monroe”',
    'quote':'“ Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”'
},
{
    'author':'Albert Einstein',
    'quote':'“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”'
},
];
function qenerateQuote(){
    let random= Number.parseInt(Math.random()*quotes.length )
    document.querySelector('#quote').textContent=`"${quotes[random].quote}"`;
    document.querySelector('#author').textContent=`"${quotes[random].author}"`;
}
