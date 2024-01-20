// 4.create an Uber price using class constructor method
class Uber{
    constructor(distance,waitingperiod,rate){
        this.distance=distance;
        this.waitingperiod=waitingperiod;
        this.rate=rate;
    }
    // getter method
    getUberRideDetails(){
    return(`the distance of the ride is ${this.distance} and the waitingtime is about ${this.waitingperiod} and the fixed rate is rupees: ${this.rate} `);
    }
    getTotalRate(){
     // calcualte the waiting after 15 mins 
        if(this.waitingperiod>15){
          let  TotalRate =(this.distance*this.waitingperiod) + (this.rate*this.waitingperiod);
            return TotalRate;
        }
        else{
                 TotalRate=(this.distance+this.rate);
               return TotalRate; 
        }
       }
    //  to change the dist from current to another dist
    // setter method
    setDistance(dist){
        this.distance=dist;
        }
}

let customer1= new Uber(100,22,25);
customer1.setDistance(5000);
console.log(customer1.getTotalRate());

