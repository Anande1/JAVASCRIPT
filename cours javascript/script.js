// VARIABLES //

var name = "Anande";    // maniere de creer une variable et je l'ai apellé name et dedans j'ai stocké la valeur anande
console.log(name);

 var nameLength = name.length;
 console.log(nameLength); // ca va retourner le nbre de caracteres 

 var xString = '12'; // creer le string a partir du chiffre
 var xNumber = parseInt(xString); // il prend le string et le convertir en nbre entier
 console.log(xNumber); // ici il va imprimer à l'ecran le nbre

 var xString = '12.63'; // creer le string a partir du decimal
 var xNumber = parseFloat(xString); // il prend le string et le convertir en decimal
 console.log(xNumber); // ici il va imprimer à l'ecran la decimal

 var x =12; // on peut creer nbre entier ou decimal //
 var y = 25.63;

 var aToString = a.ToString();
 console.log(aToString); // faire passer un entier en variable string c'est a dire chaine de caracteres


var myString = 'Hello Anande';

var position = myString.indexOf("Anande"); //ici il va dire à quelle position se trouve le nom anande

console.log(position);

var myString = 'Hello Anande';

var mynewString = myString.replace("Anande","Tim"); //ici il va remplacer le mot anande par le mot tim

console.log(mynewString);

// OPERATEURS //

var string1 = 'Hello';

var string2 = 'John';

var mynewString = string1 + "" + string2; // pr additionner les strings //

// les operateurs logiques //

var x = 12;
var y = 5;
var result = x+y; // on a mit dans le result le x + y

console.log(result); // on a calculé le result du x et y

var x = 12;
var y = 5;
var result = x-y; // on a mit dans le result le x - y

console.log(result);

var x = 12;
var y = 5;
var result = x*y; // on a mit dans le result le x * y

console.log(result);

var x = 12;
var y = 5;
var result = x/y; // on a mit dans le result le x / y

console.log(result);

var x = 12;
var y = 5;
var result = x%y; // on a mit dans le result le x % y c'est a dire le modulo donc le reste de la division

console.log(result);

var x = 12;
var y = 5;
x++ // ca veut dire qu'il rajoute +1 à x

console.log(x);

var x = 12;
x++ // autre façon d'ecrire le ++ c'est la ligne suivante
x += 1;

console.log(x);

// autre cas //

var x = 12;
var y = 5;
x += y; // on lui demande de rajouter y à 12 dc ça donnera 17 x = x+y

console.log(x);

var string1 = "hello";
var string2 = "anande";

console.log(string1 + "" + string2);


// AUTRES OPERATEURS //

var myBoolean = true;  //  il peut avoir que 2 valeurs soit true ou false

var x = 5;

var myBoolean = (x===5); // est ce que c'est strictement égal à et pour demander ça on utilise ===

console.log(myBoolean);

var x = 5;

var myBoolean = (x!==5); // est ce que c'est different de et pour demander ça on utilise !==

console.log(myBoolean);

var x = 5;

var myBoolean = (x==="5"); // est ce que x est égal à chaine de caracteres? de et pour demander ça on utilise === "" 

console.log(myBoolean);

var x = 5;

var myBoolean = (x>12); // est ce que x est > à  pour demander ça on utilise >

console.log(myBoolean);

var x = 5;

var myBoolean = (x>=5); // est ce que x est > ou égal à et pour demander ça on utilise >=

console.log(myBoolean);

var x = 5;
var y = 12;
var myBoolean = (x>3 && y<15); // on lui demande 2 choses si x>3 ET y>15? pour que le ET soit vrai il faut que toutes les parties soient vraies

console.log(myBoolean);

var x = 5;

var myBoolean = (x>3 || y<10); // est ce que x>3 OU y<10? si une des parties est vraie toute l'expression sera vraie

console.log(myBoolean);

// LES VALEURS POSSIBLES AVEC && || //

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false  ici on demande l'inverse de not true
console.log(!false); // true

// SYNTAXE D'1 CONDITION //

if(condition1)
{
    console.log("executes ce code"); // ce qu'on veut écrire si la condition est vérifiée
}

else if(condition2)
{
    console.log("la condition1 n'est pas vraie mais la  2 l'est !!!");
}
else
{
    console.log("alors executes ce code là");
}

// exemple //

var speed = 70;

if(speed<80)
{
    console.log("tu roules à la bonne vitesse");
}

else if(speed<100)
{
    console.log("il faut que tu ralentisses un peu !!!");
}

else{
    console.log("tu roules beaucoup trop vite!!!")
}

// IF IMBRIQUEE //

var speed = 70;

if(speed<80)
{
    if(speed<50)
    {
        console.log("accélères un petit peu!!!");
    }
    else{
        console.log("tu roules à la bonne vitesse");
    }
    
}

else if(speed<100)
{
    console.log("il faut que tu ralentisses un peu !!!");
}

else{
    console.log("tu roules beaucoup trop vite!!!")
}

// AUTRE ELEMENT DE CONDIION //

switch(variable)
{
    case 1: // si le cas 1 est vérifiéé alors fais moi ce code jusqu'au break
        break;
    case 2:
        break;

    default:
}

// EXEMPLE //

var favoriteColor = "blue" ; // en fonction de la couleur que je met ici il y aura le code en dessous correspondant qui va s'éxecuter

switch(favoriteColor)
{
    case "blue":
        console.log("wouah! le bleu c'est trop beau");
    case "red":
        console.log("j'aimerais bien une voiture rouge!");
    default:
        console.log("je ne connais pas ta couleur!!!"); // apres le default pas besoin de break puisque c'est la fin
}

// PLUSIEURS CAS DANS UN SWITCH

var favoriteColor = "blue" ; // en fonction de la couleur que je met ici il y aura le code en dessous correspondant qui va s'éxecuter

switch(favoriteColor)
{
    case "yellow": // ou si case yellow ou si case blue tu me fais le code en dessous car ya aucun break entre les 2
    case "blue":
        console.log("wouah! le bleu et le jaune c'est trop beau");
    case "red":
        console.log("j'aimerais bien une voiture rouge!");
    default:
        console.log("je ne connais pas ta couleur!!!"); // apres le default pas besoin de break puisque c'est la fin
}


// LOOPS LES BOUCLES //

var number = 0;

while(number<3) // ici la condition que je verifier à chaque fois
{
    console.log(number); // donc j'executes ce code
    number ++; // et ensuite j'augmente ce number de 1 jusqu'à ce que ça soit inférieur à 3
}

var number = 0;

do
{
    console.log(number); // d'abord il va faire ce code là ici il fera 0+1
    number ++;
}
while(number<3) // ici la condition que je verifie à chaque fois après le do


// exemple

var number = 0;

while(number>0 && number<3) // si number >0 ET <3 alors tu passe dans le code en dessous
{
    console.log(number); // affichage du number 
    number ++; // number +1 tant que la condition du while reste vraie
}

var number = 0;

do
{
    console.log(number); // affichage du number 
    number ++; // number +1
}
while(number>0 && number<3) // si number >0 ET <3 alors tu passe dans le code en dessous


for(partie1;partie2;partie3)
{
    console.log();
}

// exemple 

for(var number = 0; number<5; number++) // j'initialise mon number ensuite je verifie ma condition si c'est vérifiée j'affiche ensuite je lui ajoute +1 , l'initialiation se fait 1 seule fois
{
    console.log(number);
}


// FONCTIONS //


function name(parameter1, parameter2, parameter3)
{
    console.log() // ici le code à executer
    return result; // ça peut retourner une valeur
}

// exemple

// ici c'est la declaration de la fonction
function multiply(number1, number2) 
{
    return number1 * number2;
}

// ici c'est comment je l'utilise
var a = 5; 
var b = 6;

var result = multiply(a,b); // c'est comme ça qu'on ecrit pr que ça retourne le resultat

console.log(result);

function multiply(number1, number2, number3) 
{
    return number1 * number2 * number3;
}

// ici c'est comment je l'utilise
var a = 5; 
var b = 6;

var result = multiply(a,b,a); // c'est comme ça qu'on ecrit pr que ça retourne le resultat

console.log(result);


// SCOPE //

function multiply(number1, number2, number3) 
{
    var resultMultiply = number1 * number2 * number3;
    return resultMultiply; // ce resultMultiply est connu que ds la fonction et nulle part ailleurs dc on peut pas l'utiliser ailleurs
}

var a = 5; 
var b = 6;

var result = multiply(a,b,a); 

console.log();

// pour que le resultMultiply ne soit plus local il faut écrire de cette façon

function multiply(number1, number2, number3) 
{
     resultMultiply = number1 * number2 * number3; // ce resultMultiply n'est plus en local uniquement que ds la fonction il peu etre utiliser même en dehors de la fonction
    return resultMultiply; 
}

var a = 5; 
var b = 6;

var result = multiply(a,b,a); 

console.log(resultMultiply);

// ARRAY //

var name[valeur1, valeur2, valeur3];

//exemple//

var fruits = ["Pomme","Orange","Banane","Citron"] // ce sont des strings "" qu'il ya dedans

console.log(fruits.length); // avec la propriete length ça va retourner 4 car il compter la taille du array

// pour avoir 1 seul element du array

var fruits = ["Pomme","Orange","Banane","Citron"] // ce sont des strings "" qu'il ya ds cet exemple

console.log(fruits[0]); // ça retournera Pomme
console.log(fruits); // il va retourner tout ce qu'il y a ds le array


var fruits = ["Pomme","Orange","Banane","Citron"]

for (var i =0; i<fruits.length; i++) // pour i=0 ensuite tant que i < longueur 4 et là tu fais i +1
{
    console.log(fruits[i]); // il va retourner pomme, puis orange puis banane enfin citron et il s'arrête
}

var fruits = ["Pomme", "Banane", "Orange", "Citron", "Grenade"]

fruits.push("Kiwi"); // pour rajouter 1 element au array
console.log(fruits);

fruits.pop(); // pour retirer la derniere valeur du array
console.log(fruits);

var agrumes = fruits.slice(2,4) // ça prend 2 arguments donc le 2 inclus jusqu'au 4 non inclus

console.log(fruits); // ça va retourner orange et citron car 4 non inclus

var myArray = ["Pomme", 15, true] // il peut y avoir un string un number et un booleen

console.log(myArray);

// on peut faire un array ds un array

var myArray = [[0,1] , [5,7,4], [12,18,45,78]];

console.log(myArray[1][1]); // si je veux afficher la place du 7

// OBJETS //

// syntaxe d'ecriture d'un objet, il peut y avoir pleins de propriétés, ça peut même avoir des methodes
var object = 
{
    propertyName1: propertyValue1,
    propertyName2: propertyValue2,
    propertyName3: propertyValue3,
    propertyName4: propertyValue4,
    method1: function()
    {
        
    }
};

// exemple d'un objet //

var dog = {
    name: "Choupette",
    color: "white",
    age: 4
};

console.log(dog.age); // pour accéder à une propriete en particulier
console.log(dog["name"]); // autre forme d'écriture

// BOUCLE POUR LISTER PROPRIETE DE L'OBJET //

var dog = {
    name: "Choupette",
    color: "white",
    age: 4
};

for(var property in dog)
{
    console.log(dog[property]);
}

// AUTRE FACON DE CREER UN OBJET //

var dog = new object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5;

// SI ON VEUT DONNER LA METHODE ABOYER //
// les methodes ce sont des fonctions //

var dog = new object();
dog.name = "Choupette",
dog.color = "white";
dog.age = 5;
dog.aboie = function()
{
    console.log("wouaf wouaf")
};
dog.aboie(); // ici on demande d'executer cette fonction

// utilisation boucle //

var dog = new object();
dog.name = "Choupette",
dog.color = "white";
dog.age = 5;
dog.aboie = function(number)
{
    while(number>0)
    {
        console.log(number.ToString() + "wouf wouf"); // il va retourner 4x wouf puis 3x etc...
        number --; 
    }
};

dog.aboie(4);

// FONCTIONS CONSTRUCTEURS //
// POUR CREER DES OBJETS QUI ONT LE MEME TYPE AU LIEU DE TOUT REECRIRE ON CREER UN CONSTRUCTEUR //


function Dog(name,color,age) // cette fonction constructeur dog on peut l'imaginer comme une usine à fabriquer des chiens //
{
this.name = name; // le chien spécifique que je vais fabriquer son nom ça sera le nom que j'ai donné ds la fonction constructeurs
this.color = color;
this.age = age;
}

var petitCaniche = new Dog("Choupette","white","4"); // creation de la variable petit caniche avec la fonction constructeur Dog qui a 3 arguments

// pour creer un autre chien 
var grosPitbull = new Dog("Rex","black","2");

console.log(petitCaniche); // on verra de quoi est composé le petit caniche

console.log(grosPitbull);

// ON VA RAJOUTER UNE METHODE //

function Dog(name,color,age) // cette fonction constructeur dog on peut l'imaginer comme une usine à fabriquer des chiens //
{
    this.name = name; // le chien spécifique que je vais fabriquer son nom ça sera le nom que j'ai donné ds la fonction constructeurs
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
    console.log("wouaaaaaaf");
    }
}

petitCaniche.aboie(); // utilisation de la methoe aboie 

// SI ON ECRIT DS LA METHODE LE NOM DU CHIEN 

function Dog(name,color,age) // cette fonction constructeur dog on peut l'imaginer comme une usine à fabriquer des chiens //
{
    this.name = name; // le chien spécifique que je vais fabriquer son nom ça sera le nom que j'ai donné ds la fonction constructeurs
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
    console.log("wouaaaaaaf" + this.name);
    }
}

petitCaniche.aboie();