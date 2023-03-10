// alert('How are you')
const showAlert = ()=>{
    alert('Dostoh Taka Dhar dibi')
}

const lendMoney =()=>{
    const result = confirm('Taka Dhar dibi 500?')
    console.log(result);
    if(result === true){
        alert('Tui Amar Jaan er dostoh!!')
    }
    else{
        console.log('DGM.........Tui amar baler bondhu');
    }
}

const getInfo = ()=>{
    // alert
    // confirm
    const name = prompt('Tell Me your Name')
    console.log(name);
}