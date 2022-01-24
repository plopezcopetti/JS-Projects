const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 6;
        break;
      case 'sunday':
        return 9;
        break;
      default:
        return 'Error!'
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log("You're sleeping " + (idealSleepHours - actualSleepHours) + " hours more per week than needed!");
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log("You're sleeping " + (idealSleepHours - actualSleepHours) + " hours less per week than what's adviseable. Check up your sleep hygene!");
    }
    else {
      console.log("Error! Please check your input.")
    }
  };
  
  calculateSleepDebt();