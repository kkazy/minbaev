const a = "a"; 
const b = 20;
const bool = true;
const bool2 = false;

//  let c = 30;

//console.log(a)
//console.log(b)
//console.log(c)

const obj = {
    key:"value",
    first_name: 'Jack',
    data: {
        first_name:'Barbaro',
        last_name:'John'
    }
} //object


//console.log(obj)
//console.log(obj.first_name)
//console.log(obj.key)
//console.log(obj.data.first_name)
//console.log(obj.data.last_name)

const arr = ["adf", 234, true, false, 'afde']
//console.log(arr[0], arr[1])


console.log(typeof arr);

// const name = prompt ("Как вас зовут?");
// console.log("Hello" + " " + name);

const first_number = prompt("Первое число?")
const last_number = prompt("Второе число?")

if (first_number > last_number){
    console.log(first_number + ">" + last_number    );
} else if (first_number < last_number){
    console.log(last_number + ">" + first_number);
} else {
    alert(first_number + "=" + last_number);
}
