// - Create interface for the workload json

interface Weather {
    Nose: string;
    Station: string;
    BOW?: (BOWEntity)[] | null;
    CheckType: string;
  }
  interface BOWEntity {
    Nose: string;
    ATA: string;
    BOWTYPE: string;
    COMMENTIND: string;
    Priority: string;
    Carrier: string;
    CRITUPGRADE: boolean;
    Created: string;
    EMPLOYEENUMBER: string;
    FLEET: string;
    IDENTIFY: string;
    ID: number;
    MEL: string;
    MENUMBER: string;
    Modified: string;
    REF: string;
    TASKDESCRIPTION: string;
    TOTALHRS: number;
    CRIT: number;
    partsData?: (PartsDataEntity | null)[] | null;
    hours_warn?: boolean | null;
    hours?: string | null;
  }
  
  interface PartsDataEntity {
    CPN: string;
    Total: number;
    Required: number;
  }
  
  // - Create types
  
  type Employee = {
      name: string;
      id: string;
      active: boolean;
      knownFor: string[];
  };
  
  type Company = {
      name: string;
      acv: number;
      isFortune500: boolean;
  }
  
  // - Create simple person class, that accepts the persons first name
  
  class Person { 
  
      firstName:string; 
     
      constructor(firstName:string) { 
         this.firstName = firstName 
      }  
   
      printFirstName():void { 
         console.log("Firstname of person is  :   "+this.firstName) 
      } 
   }
   
   var person1 = new Person("Revanth");
   person1.printFirstName();
  
  // - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'
  
  class Mechanic extends Person {
  
      title:string;
  
      constructor(firstName:string) {
          super(firstName);
          this.title = "AMT";
      }
  
      printMechanicFirstNameAndTitle():void {
          console.log("Mechanic details ");
          console.log("Mechanic firstname is "+this.firstName);
          console.log("Mechanic title is "+this.title);
      }
  }
  
  var mechanic1 = new Mechanic("Revanth");
  mechanic1.printMechanicFirstNameAndTitle();
  // - 