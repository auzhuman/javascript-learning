                                                                      15 मई 2022 02:48:54 अपराह्न 

---------------types of error in js------------------------

Syntax Error = Error in Syntax
Refrence Error = memory allocation but no value == undefined
TypeError = misinterpretation of types  

---------------Varaiables/Objects Declaration--------------

var VariableName = {

Name : "Human",
Age : 20,
Height :5.5

}
----------------Operation Inside an Object------------------
1.adding paramaeters into the object
 VariableName.RollNo = 15
2.delete a parameter
 delete VariableName.Height


----------------functions----------------- 
1.Expression Syntax
   var NameofFunction = function(){//parameters}
   //calling before declaration gives TypeError
2.Declaration Syntax 
  function FunctionName (){//prameters}
  //calling before declaration has no error,this is due to Hoisting;
  //Hoisting = Hoisting in js moves all the Declaration to the top of the code before execution.Helps to
   make use of function before declaration as declration of function is made before
  Declaration of varaiable also moves it to the top but only the name of varaible not assigned value
  #hoisting.js
  
+++++++++++++++++Type of Function++++++++++++++++++++++
1.Named Function ==> Function with Name
2.Unnamed Function ==> Anonymous without name
     function(){} //most used.
3.Function With Arguments ==>
     i.//single
     function Welcome (parameters){ 
       var text = "welcome " + parameters +  "to js ";
     }
     Welcome(args)
     
     ii.//double args
     
     function College(course,name){
     var text = "This course" + course "is offered to " + name;
     }
     College("Computer","Ram")
     College(_,"Ram")
     College(NULL,"Ram")
     
     iii.//triple or more args then use single args
     function sendMail(to,from,subject,message){}
     OR
     function mail (details){use var.to to access}
     
     var maildata = {
       to : "ram@gmail.com",
       from : "hero@gmail.com",
       subject : "Sick Leave" ,
       message : "message"
      }
     mail(mailData);
     
4.Function with Return Type ==> return value and end.using return
                                for mutiple value use array or objects
                                
                                return {a : ram, b : 3000}  
                                
5.IIFE(immeditately invocked functional expression)
  ()() --(functionname)()--->calls
  can be used to call anonynmous function 
  //call operation
  (function(){//prarmaters})()
  
  //with args
   //call operation
  (function(param){//prarmaters + para})("args")
  
  
-----------✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️-----SCOPE-----✌️✌️✌️✌️✌️✌️✌️✌️✌️✌️-----------
--> accessibility of application data<--
1.Global Scope
 Throughout the file accessible application data:declared at outermost layer

2.Local Scope (Functional Scope)
 inside a functional unit:only accessibile inside a function.
 
 if var keyword is not used while declaring variable inside a function it replaces previous one and it is a global scope. 👌️

3.Block Scope
 var declared inside a function is only single allocation.
 Let keyword is used to maintain block specific scope it does not let to get inside blocks.
 



------------------------------------Closure Property---------------------------------------
|function inside a function and the scope of variables and function                       |
|                                                                                         | 
|//code                                                                                   | 
|function functionname1(para1){                                                           |
|    function functionname2(param2)                                                       |
|{                                                                                        |      
|   var sum = param1 + param 2;                                                           |
|          return sum;                                                                    |
|    }                                                                                    |
|return functioname2;                                                                     |
|}                                                                                        |
|                                                                                         |
|result = functionname1(param1)(param2);                                                  |
|//output is in results.                                                                  |
|_________________________________________________________________________________________|
 
 
-----------------------Mutable and Immutable Behaviour in data types----------------------
1.Mutable property(**array and Object)
 Once changed in original reflects in refrenced.
 Once changed in refrenced reflects in original.
 
2.Immutable property(primitive data types)
 Once changed in original doesnot reflects in refrenced.
 Once changed in refrenced doesnot reflects in original.
 
 
-----------------------------------Code Execution------------------------------------------
-----------------------------------Async and Sync -----------------------------------------
1.For each step in SYNC EXECUTION step waits for the result to come after which another step carries its job.
D---slow  A --but simple

2.For each step in ASYNC EXECUTION step  does not waits for the result to come after which another step carries its job.
A--save time. D--harder to implement --result handling

BLOCKING AND NON-BLOCKING TASK
If a function has a delay in giving out the result or is a blocking task then we use callback:
=========================CALLBACK--(FUN-ERROR-DONE)====================================
Callback is a function which is passed as a argument to another function-used to handle asynchronous call results

#coffeestory.js
Callback has function error done
#callBack_continue.js
--1.callback with single args for failure.
--2.with two args for success where 1st args must be a falsy value.

---nested callback function (error done)--
if done (make function call to next step)

CallBack Limitations
1.multiple result(callBack doesn't maintain state)

--------------------------------Method-----------------------------------
value as a function is mehod.
var ups = { name:"belkin",
            time : 5,
            a : function(){} //method
          }
          
ups.a()
          


-----------------------------PROMISE------------------------------------------------------

Promise maintains state no multiple results .
It is an object.with key value pair.
--syntax 
var varname = new Promise(function(succ,fail){
                          //succ is for success callback ,and fail for failure cb() 
                          resolve()
                          reject()
                          })
                          

                          //globally resolve and reject is used.

_three methods in promise(used for result handling in async call)

1.then = Handles success and failure(if resolve called goes to then)
2.catch(error) = handles failure only.(if reject called goes to catch)
3.finally = invoked for both failure and success.

--Promise has four states

1.Pending = promise initialized but result not available
2.onRejection = failure in promise
3.onFulfilled = success in promise
4.settled = promise is always settled and here result is available.

A promise always  either goes to fulfilled or reject state and finally to settled state.ONCE A PROMISE REACHES TO SETTLE IT NEVER CHANGES ITS STATE.


-----------------------SERIALIZATION---------------------------------
Object or Data is translated into a favorabl format so can be easily transferred over to a network .
JSON.stringify() //serialize
JSON.parse()//deserialize 


---------------------------------LOOPS-------------------------------------


1.FOR IN LOOP-----//usually used in object,array.
     //syntax
     for (let key in objectName){
             console.log("key is " , key)
             console.log("value" , marker[key])
             }
      //use [] notation for refrencing
      
      //for non-occuring item in array indexOf return -1 
      
      
2.for each loop
 //SYNTAX
 	array.forEach(function(item,value){
 	         item.price == 50000
 	         }
 	         
3.filter    
let basket =  array.filter(function(item,value){
      	if (item.price == 50000){
      	       return True
      	       }
     }
cosole.log(basket)

4.Map(creates new array from source and has a relation with source with same no of element)

const varname = array.map(function(item,index){
 			return item.price
 			}
5.some(returns boolean value true if either of the condition are true)

				_______																				
 -------------------------------|class|----------------------------------
				
 syntax:
   class classname{
      name;
      constructor(){ //self invoking function
          this.name = ""
          }
      getname(){
      	return this.name
      	}
    }
    
for inheritance
  class child extends parent{
            constructor(){
                super();//used to access the parent class constructor
             }
    }
    
    
-----------------------------FUNCTION--------------------------------
1.methods
2.functional constructor (uses capital letter to declare and uses new to invoke and noreturn block returns whatever is inside this)
3.higher order function
4.closure(function inside a function)
5.callback(function as a argument)

------------------------------prototyping----------------------------------

functional constructor 

function FunctionNameCapital (){
 //fun body
  }
  
var varname = new FunctionNameCapital()//new used to invoke functional constructor

--adding property to a functional constructor
FunctionalconsName.prototype.name = ""
FunctionconsName.prototype.funcname = function(){}

functional construcor : js datatypes like array,string,number,bolean
Prototype :inbuilt methods and properties of js data types areadded using data types.
           like map ,filter ,for each 
           
           
           
                                       --ES6--
                                     echema script
object shorthand

 







-------------truthy/falsy value---------------------

falsy = NaN,null,_ ,FALSE etc
truthy = True,declaration.

