// START




//Back
$(document).ready(function(){
  $("#burgerBack").on("click",function(){
    $("#menuPic").removeClass("hiding");
    $("#menuPic").addClass("showing");


    $("#burgerMenu").removeClass("showing");  
    $("#burgerMenu").addClass("hiding");
  });
});
$(document).ready(function(){
  $("#wingBack").on("click",function(){
    $("#menuPic").removeClass("hiding");
    $("#menuPic").addClass("showing");


    $("#wingMenu").removeClass("showing");  
    $("#wingMenu").addClass("hiding");
  });
});
$(document).ready(function(){
  $("#sideBack").on("click",function(){
    $("#menuPic").removeClass("hiding");
    $("#menuPic").addClass("showing");


    $("#sideMenu").removeClass("showing");  
    $("#sideMenu").addClass("hiding");
  });
});
$(document).ready(function(){
  $("#beverageBack").on("click",function(){
    $("#menuPic").removeClass("hiding");
    $("#menuPic").addClass("showing");


    $("#beverageMenu").removeClass("showing");  
    $("#beverageMenu").addClass("hiding");
  });
});
//Going back to categories
$(document).ready(function(){
  $(".nav-option").on("click",function(){
    $("#burgerMenu").removeClass("showing");
    $("#burgerMenu").addClass("hiding");


    $("#menuPic").removeClass("hiding");  
    $("#menuPic").addClass("showing");
  });
});

$(document).ready(function(){
  $(".nav-option").on("click",function(){
    $("#wingMenu").removeClass("showing");
    $("#wingMenu").addClass("hiding");


    $("#menuPic").removeClass("hiding");  
    $("#menuPic").addClass("showing");
  });
});

$(document).ready(function(){
  $(".nav-option").on("click",function(){
    $("#sideMenu").removeClass("showing");
    $("#sideMenu").addClass("hiding");


    $("#menuPic").removeClass("hiding");  
    $("#menuPic").addClass("showing");
  });
});

$(document).ready(function(){
  $(".nav-option").on("click",function(){
    $("#beverageMenu").removeClass("showing");
    $("#beverageMenu").addClass("hiding");


    $("#menuPic").removeClass("hiding");  
    $("#menuPic").addClass("showing");
  });
});

//Click on burger
$(document).ready(function(){
  $(".blockMenu1").on("click",function(){

    $("#menuPic").removeClass("showing");
    $("#menuPic").addClass("hiding");

    $("#burgerMenu").removeClass("hiding");
    $("#burgerMenu").addClass("showing");
  });
});

$(document).ready(function(){
  $(".blockMenu2").on("click",function(){

    $("#menuPic").removeClass("showing");
    $("#menuPic").addClass("hiding");

    $("#wingMenu").removeClass("hiding");
    $("#wingMenu").addClass("showing");
  });
});
$(document).ready(function(){
  $(".blockMenu3").on("click",function(){

    $("#menuPic").removeClass("showing");
    $("#menuPic").addClass("hiding");

    $("#sideMenu").removeClass("hiding");
    $("#sideMenu").addClass("showing");
  });
});
$(document).ready(function(){
  $(".blockMenu4").on("click",function(){

    $("#menuPic").removeClass("showing");
    $("#menuPic").addClass("hiding");

    $("#beverageMenu").removeClass("hiding");
    $("#beverageMenu").addClass("showing");
  });
});


$(document).ready(function(){
  $("#burgerBack").on("click",function(){
    $("#menuPic").removeClass("hiding");
    $("#menuPic").addClass("showing");


    $("#burgerMenu").removeClass("showing");  
    $("#burgerMenu").addClass("hiding");
  });
});



//Review

$(document).ready(function(){
  $("#checkout-button").click(function(){
    $("ul.review").empty();
    var totalPrice=0;
    $('.checkout li').each(function() {
        var lId = $(this).data('id');
        var itemPrice=$(this).data('price');
        itemPrice=parseFloat(itemPrice);
        var formID="c-"+lId;
        var name=$(this).data('name');

        var e = document.getElementById(formID);
        var quantity = e.options[e.selectedIndex].value;
        quantity=parseInt(quantity);

        let total=parseFloat(itemPrice)*parseFloat(quantity);
        total=parseFloat(total);
        totalPrice+=total;
        $("ul.review").append("<li style='width:100%'><div class='reviewName'><h2>"+name+"</h2></div><div class='reviewPrice'><h2>$"+itemPrice+"</h2></div>"+
          "<div class='reviewQuantity'><h2>"+quantity+"</h2></div>"+
          "<div class='reviewTotal'><h2>$"+total+"</h2></div></li>");
    });
    totalPrice=totalPrice.toFixed(2);
    $("ul.review").append("<li style='width:100%'><div class='footer'><h2>Subtotal</h2></div><div class='reviewTotal'><h2>$"+totalPrice+"</h2></div> </li>");
    var tax=totalPrice*0.13;
    tax=tax.toFixed(2);


     $("ul.review").append("<li style='width:100%'><div class='footer'><h2>Tax(13%)</h2></div><div class='reviewTotal'><h2>$"+tax+"</h2></div> </li>");
      $("ul.review").append("<li style='width:100%'><div id='myDIV' class='footer'><button id='deliveryButton' class='btn active' style='border-radius: 6px 0 0 6px;margin-left: -1px;' onclick='switching(1)'>Delivery</button>"+
  "<button id='carryoutButton' class='btn ' style='border-radius:0 6px 6px 0;margin-left:-1px;' onclick='switching(2)'>Carry out</button></div><div class='reviewTotal'><h2>$0.00</h2></div> </li>");
    var real=parseFloat(tax)+parseFloat(totalPrice);
    real=real.toFixed(2);     
      $("ul.review").append("<li style='width:100%'><div class='footer'><h2>Total</h2></div><div class='reviewTotal'><h2>$"+(real)+"</h2></div> </li>");





$("ul.review").append("<li style='width:100%'><a href='Payment.html'><button id='proceed'>Proceed to Payment</button></a></li>");



    if(totalPrice>0)
    {
      $("#reviewModal").css("display","block");  
    }
    else
    {
      alert("Your cart is empty!!");
    }
  });

    $(".close").click(function(){
    $("#reviewModal").css("display","none");  
  });


});
function switching(a)
{
  let curr;
  let op;
  if(a==1)
  {
    curr='deliveryButton';
    op='carryoutButton'
  } 
  else
  {
    curr='carryoutButton';
    op='deliveryButton';
  }
$("ul.review").append("<li style='width:100%'>"+op+"</li>");
  var element=document.getElementById(op);

  if(element.classList.contains("active"))
  {
    $('#'+curr).addClass("active");
    $('#'+op).removeClass("active");
  }

}
//Modal burger 1
$(document).ready(function(){
  $("#buildOwn").click(function(){

    $("#modalBurger-1").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-1").css("display","none");  
  });


});
//Cheeseburger
$(document).ready(function(){
  $("#buildCheeseburger").click(function(){

    $("#modalBurger-2").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-2").css("display","none");  
  });


});
//bltburger
$(document).ready(function(){
  $("#bltburger").click(function(){

    $("#modalBurger-3").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-3").css("display","none");  
  });


});

//crispyChicken 
$(document).ready(function(){
  $("#crispyburger").click(function(){

    $("#modalBurger-4").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-4").css("display","none");  
  });


});

//GIANTburger
$(document).ready(function(){
  $("#giantburger").click(function(){

    $("#modalBurger-5").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-5").css("display","none");  
  });


});

//special
$(document).ready(function(){
  $("#specialburger").click(function(){

    $("#modalBurger-6").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-6").css("display","none");  
  });


});

$(document).ready(function(){
  $("#beyondburger").click(function(){

    $("#modalBurger-7").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalBurger-7").css("display","none");  
  });


});

//honeyGlazed
$(document).ready(function(){
  $("#honeyGalzed").click(function(){

    $("#modalWings-1").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalWings-1").css("display","none");  
  });


});

//CRISPYWINGS
$(document).ready(function(){
  $("#crispyWings").click(function(){

    $("#modalWings-2").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalWings-2").css("display","none");  
  });


});

//BUFFALOWINGS
$(document).ready(function(){
  $("#buffaloWings").click(function(){

    $("#modalWings-3").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalWings-3").css("display","none");  
  });


});

//FRENCH FRIES
$(document).ready(function(){
  $("#frenchfries").click(function(){

    $("#modalSides-1").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalSides-1").css("display","none");  
  });


});

//wedges
$(document).ready(function(){
  $("#wedges").click(function(){

    $("#modalSides-2").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalSides-2").css("display","none");  
  });


});

//ONION RINGS
$(document).ready(function(){
  $("#onionRings").click(function(){

    $("#modalSides-3").css("display","block");  
  });

    $(".close").click(function(){

    $("#modalSides-3").css("display","none");  
  });


});


class Food
{
  constructor(name,price)
  {
    this._name=name;
    this._price=price;
    this._veg=[];
    this._sauce=[];
  }
  get price()
  {
    return this._price;
  }
  set price(object)
  {
    this._price=object;
  }
  get name() {
        return this._name;
    } 
    get meat()
    {
      return this._meat;
    }
    set meat(object)
    {
      this._meat=object;
    }
    get veg()
    {
      return this._veg;
    }
    addVeg(object)
    {
      this._veg.push(object);
    }
    get sauce()
    {
      return this._sauce;
    }
    addSauce(object)
    {
      this._sauce.push(object);
    }
    get vegDescription()
    {
      var i=0;
      var content="";
      for(i=0;i<this._veg.length;i++)
      {
        if(i < this._veg.length - 1){

        content+=this._veg[i]+", ";
       }
       else{
        content+=this._veg[i]+".\t";
       }
      }
      return content;
    }    
    get sauceDescription()
    {
      var i=0;
      var content="";
      for(i=0;i<this._sauce.length;i++)
      {
        if(i < this._sauce.length - 1){

        content+=this._sauce[i]+", ";
       }
       else{
        content+=this._sauce[i]+".";
       }
      }
      return content;     
    }
}

function updateTotalPrice()
{
  var i=0;
  var total=0.00;
  $('.checkout li').each(function() {
        var lId = $(this).data('id');
        var itemPrice=$(this).data('price');
        itemPrice=parseFloat(itemPrice);
        var formID="c-"+lId;

        var e = document.getElementById(formID);
        var quantity = e.options[e.selectedIndex].value;
        quantity=parseInt(quantity);

    total+=itemPrice*quantity;
    });
  total=total.toFixed(2);
    $("#checkoutTotal").html("<h1>Total : $"+total+"</h1>");
}
var itemID=1;
function deleteItem(object)
{
  $("#"+object).remove();
  updateTotalPrice();
}
function customizeBurger0( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat0");
  var vegs=document.getElementsByName("veg0");
  var sauces=document.getElementsByName("sauce0");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id="+itemID+" data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">'+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");



    itemID++;
    updateTotalPrice();

    $("#modalBurger-1").css("display","none");

}

function customizeBurger1( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat1");
  var vegs=document.getElementsByName("veg1");
  var sauces=document.getElementsByName("sauce1");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();

        $("#modalBurger-2").css("display","none");
}

function customizeBurger2( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat2");
  var vegs=document.getElementsByName("veg2");
  var sauces=document.getElementsByName("sauce2");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();

        $("#modalBurger-3").css("display","none");
}

function customizeBurger3( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat3");
  var vegs=document.getElementsByName("veg3");
  var sauces=document.getElementsByName("sauce3");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();
        $("#modalBurger-4").css("display","none");
}

function customizeBurger4( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat4");
  var vegs=document.getElementsByName("veg4");
  var sauces=document.getElementsByName("sauce4");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();
        $("#modalBurger-5").css("display","none");
}

function customizeBurger5( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat5");
  var vegs=document.getElementsByName("veg5");
  var sauces=document.getElementsByName("sauce5");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();
        $("#modalBurger-6").css("display","none");
}

function customizeBurger6( name,price)
{
  var i=0;
  var meat=document.getElementsByName("meat6");
  var vegs=document.getElementsByName("veg6");
  var sauces=document.getElementsByName("sauce6");

  var burger=new Food(name,price);

  for (i = 0; i < meat.length; i++) {
      if (meat[i].checked) {
          burger.meat=meat[i].value;
      }
  }
  for (i = 0; i < vegs.length; i++) {
      if (vegs[i].checked) {
          burger.addVeg(vegs[i].value);
      }
  }
  for (i = 0; i < sauces.length; i++) {
      if (sauces[i].checked) {
          burger.addSauce(sauces[i].value);
      }
  }

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+burger.name+" data-price='"+burger.price +"''>"+"<div>"+burger.name+"<br>"+"Meat: "+burger.meat+"<br>"+"Vegetables: "+burger.vegDescription+"<br>"+"Sauces: "+
      burger.sauceDescription+"<br>"+"</div>"+'<div">Price: '+burger.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
    itemID++;
    updateTotalPrice();
        $("#modalBurger-7").css("display","none");
}


function addFood(name,price)
{
  var food=new Food(name,price);

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+food.name+" data-price='"+food.price +"''>"+"<div>"+food.name+"<br>"+"</div>"+'<div>Price: '+food.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
      itemID++;
      updateTotalPrice();
}
function customize(name,price,object)
{
  var food=new Food(name,price);

      $("ul.checkout").append("<li style='width:100%' id='"+itemID+"' data-id="+itemID+" data-name="+food.name+" data-price='"+food.price +"''>"+"<div>"+food.name+"<br>"+"</div>"+'<div>Price: '+food.price+"</div>"
      +"<div><select class='quantity' id='c-"+itemID+"'><option selected value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>"
      +"<option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option>"
      +"<option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option>"
      +"<option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option>"
      +"<option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option>"
      +"</select></div>"+"<div><button id=delete"+itemID+" type='button' class='customize-button' onclick='deleteItem("+itemID+")'>Remove</button></div></li>");
      itemID++;
      updateTotalPrice();

    $("#"+object).css("display","none");
}

//Update price
$(document).on('change','.quantity', function() {
    updateTotalPrice();
});

//signUp

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
