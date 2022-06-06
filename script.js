const reviews = [
    {
      id: 1,
      name: "susan smith",
      work: "web developer",
      photo:
        "person-1.jpg",
      rev:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      work: "web designer",
      photo:
        "person-2.jpg",
      rev:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      work: "intern",
      photo:
        "person-3.jpg",
      rev:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      work: "the boss",
      photo:
        "person-4.jpg",
      rev:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  //items
  let photo= document.querySelector('#photo');
  let people= document.querySelector('#name');
  let work= document.querySelector('#work');
  let rev= document.querySelector('#rev');
  
  //buttons
  let leftButton= document.querySelector("#left");
  let rightButton= document.querySelector("#right");
  let surpriseButton= document.querySelector("#surprise");



  let currentItem = 0;

  function showReview(){
    const item = reviews[currentItem];
    
    photo.src=item.photo;
    people.textConent=item.name;
    work.textContent=item.work;
    rev.textContent=item.rev;
  }

  window.addEventListener('DOMContentLoaded',function () {
      showReview();
    });

  

  leftButton.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
      currentItem=reviews.length-1;
    }
    showReview();
  });

  rightButton.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
      currentItem=0;
    }
    showReview();
  });

  surpriseButton.addEventListener("click",()=>{
    //currentItem=3;
    currentItem = Math.floor(Math.random()*(reviews.length-1));
    showReview();
  });
  console.log(currentItem);