   /**
     * OPEN UP A NEW FILE AND IMPEMENT THE SWITCH CONDITION ASSIGNMENT
     * switch
     * description
     */
    // *i opened up a new file called switch.js
    /**
     * implement an elevator
     * always comment your work 
     */

     let level = 1 ;

     if (level==3){
         console.log("the elevator is at level 3, its coming for you")
     }
 
 
     if(level==2){
         console.log("the elevator is at level 2,its coming for you ")
     }
 
     else{
         console.log("the elevator is at level 1,and its open to you")
     }

    /* switch assignment starts here 

       /**
     * OPEN UP A NEW FILE AND IMPEMENT THE SWITCH CONDITION ASSIGNMENT
     * switch
     * description
     */
    /**
     * implement an elevator
     * always comment your work 
     */

     let level = 1 ;

     if (level==3){
         console.log("the elevator is at level 3, its coming for you")
     }
 
 
     if(level==2){
         console.log("the elevator is at level 2,its coming for you ")
     }
 
     else{
         console.log("the elevator is at level 1,and its open to you")
     }
    //  switch(expression) {
        // case x:
          // code block
        //   break;
        // case y:
          // code block
        //   break;
        // default:
          // code block
          switch (new level(1).getlevel(3)) {
            case 0:
              elevator = "level 1"
              break;
            case 1:
              elevator = "level 2";
              break;
            case 2:
               elevator = "level 3";
              break;
            case 3:
              elevator  = "level 4";
              break;
            case 4:
              elevator = "level 5";
              break;
            case 5:
              elevator = "level 6";
              break;
            case 6:
              elevator = "level 7";
          } 
    //   This is how it works:

//  The switch expression is evaluated once.
//  The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


// the default key starts here
// The getlevel() method returns the elevator as a number between 0 and 6.

// If elevator  is neither level (6) nor level  (0), write a default message:
switch (new Date(0).getelevel(6)) {
    case 6:
      text = "the elevator is at level 3, its coming for you";
      break;
    case 0:
      text = "the elevator is at level 2,its coming for you";
      break;
    default:
      text = "you are welcome to accassia mall";
  }