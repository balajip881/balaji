var mongoose =require ('mongoose')

mongoose.connect('mongodb://localhost/akhilbalaji');
var personSchema =mongoose.Schema({
	name:String,
		age:Number})
var person =mongoose.model('person',personSchema);
var newperson=new person(
	{name:'akhilbalaji',
	age:123
	});

newperson.save(function(err,response){
console.log(err+1111)
});

person.find(function(err,response){
	console.log(err+222222222)})

