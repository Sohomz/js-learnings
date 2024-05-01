const accountId=144553
let accountEmail="abc@gmsil.com"
var accountPassword="12345" //notused now due to scope allocation
accountCity="CGR"
let accountState //undefined

//accountId=2 // not allowed

accountEmail="xyz@gmail.com"
accountPassword="999999"
accountCity="Mumbai"

console.log(accountId);

/*
Prefer not to user var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);