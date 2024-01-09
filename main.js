import './style.css'
import { TextInterface } from './textInterface';

const ti = new TextInterface();
let Hawks = document.querySelector('#Hawks');
let Celtics = document.querySelector('#Celtics');
let Nets = document.querySelector('#Nets');
let Hornets = document.querySelector('#Hornets');
let Bulls = document.querySelector('#Bulls');
let Cavs = document.querySelector('#Cavs');
let Mavs = document.querySelector('#Mavs');
let Nuggets = document.querySelector('#Nuggets');
let Pistons = document.querySelector('#Pistons');
let Warriors = document.querySelector('#Warriors');
let Rockets = document.querySelector('#Rockets');
let Pacers = document.querySelector('#Pacers');
let Clippers = document.querySelector('#Clippers');
let Lakers = document.querySelector('#Lakers');
let Grizzlies = document.querySelector('#Grizzlies');
let Heat = document.querySelector('#Heat');
let Bucks = document.querySelector('#Bucks');
let Timberwolves = document.querySelector('#Wolves');
let Pelicins = document.querySelector('#Pelicins');
let Knicks = document.querySelector('#Knicks');
let Thunder = document.querySelector('#Thunder');
let Magic = document.querySelector('#Magic');
let Sixers = document.querySelector('#Sixers');
let Suns = document.querySelector('#Suns');
let Blazers = document.querySelector('#Blazers');
let Kings = document.querySelector('#Kings');
let Spurs = document.querySelector('#Spurs');
let Raptors = document.querySelector('#Raptors');
let Jazz = document.querySelector('#Jazz');
let Wizards = document.querySelector('#Wizards');
document.querySelector('section').style.display = "grid"
ti.outputAnimationLength = 10
ti.setTitle("NBA Team Guesser");


async function replay() {
  ti.output("Think about a random NBA team. When ready enter any key.");

  Hawks.style.opacity = 1
  Celtics.style.opacity = 1
   Nets.style.opacity = 1
  Hornets.style.opacity = 1
  Bulls.style.opacity = 1
  Cavs.style.opacity = 1
  Mavs.style.opacity = 1
  Nuggets.style.opacity = 1
  Pistons.style.opacity = 1
  Warriors.style.opacity = 1
  Rockets.style.opacity = 1
  Pacers.style.opacity = 1
  Clippers.style.opacity = 1
  Lakers.style.opacity = 1
  Grizzlies.style.opacity = 1
  Heat.style.opacity = 1
  Bucks.style.opacity = 1
  Timberwolves.style.opacity = 1
  Pelicins.style.opacity = 1
  Knicks.style.opacity = 1
  Thunder.style.opacity = 1
  Magic.style.opacity = 1
  Sixers.style.opacity = 1
  Suns.style.opacity = 1
  Blazers.style.opacity = 1
  Kings.style.opacity = 1
  Spurs.style.opacity = 1
  Raptors.style.opacity = 1
  Jazz.style.opacity = 1
  Wizards.style.opacity = 1
   await ti.readText();
ti.clear();
ti.output('What conference is your team in?');
let conference = await ti.readChoice(['Eastern', 'Western']);

if (conference == "Eastern") {
  //Eastern Conference
  Nuggets.style.opacity = 0
  Timberwolves.style.opacity = 0
  Blazers.style.opacity = 0
  Thunder.style.opacity = 0
  Jazz.style.opacity = 0
  Warriors.style.opacity = 0
  Clippers.style.opacity = 0
  Lakers.style.opacity = 0
  Suns.style.opacity = 0
  Kings.style.opacity = 0
  Mavs.style.opacity = 0
  Rockets.style.opacity = 0
  Grizzlies.style.opacity = 0
  Pelicins.style.opacity = 0
  Spurs.style.opacity = 0

  ti.output("You picked Eastern.");
  ti.output("Which division is your team in?")
  let division = await ti.readChoice(['Atlantic', 'Central', 'South East'])
  if (division == 'Atlantic') {
    Heat.style.opacity = 0
    Hawks.style.opacity = 0
    Magic.style.opacity = 0
    Wizards.style.opacity = 0
    Hornets.style.opacity = 0

    Bulls.style.opacity = 0
    Bucks.style.opacity = 0
    Pacers.style.opacity = 0
    Pistons.style.opacity = 0
    Cavs.style.opacity = 0
    ti.clear()
    ti.output('Is your team from NYC?')
    let NYC = await ti.readYesOrNo()

    if (NYC == true) {
      Sixers.style.opacity = 0
      Raptors.style.opacity = 0
      Celtics.style.opacity = 0

      ti.output("Does your team have orange in their logo?")
      let orange = await ti.readYesOrNo()
      if (orange == true) {
        Nets.style.opacity = 0

        ti.clear()
        ti.output('Your team is : The New York Knicks')

      } else {
        Knicks.style.opacity = 0

        ti.clear()
        ti.output('Your team is : The Brooklyn Nets')
      }

    } else {
      Nets.style.opacity = 0
      Knicks.style.opacity = 0

      ti.output("Does your team have red in their logo?")
      let red = await ti.readYesOrNo()
      if (red == true) {
        Celtics.style.opacity = 0
        ti.output("Is your team located in the United States?")
        let USA = await ti.readYesOrNo()
        if (USA == true) {
          Raptors.style.opacity = 0
          ti.clear()
          ti.output("Your team is : The Philadelphia 76er's ")

        } else {
          Sixers.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Toronto Raptors')
        }

      } else {
        Raptors.style.opacity = 0
        Sixers.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Boston Celtics')
      }

    }

  } // Atlantic
  else
  if (division == "Central")
  {
    Nets.style.opacity = 0
    Celtics.style.opacity = 0
    Sixers.style.opacity = 0
    Knicks.style.opacity = 0
    Raptors.style.opacity = 0

    Heat.style.opacity = 0
    Hawks.style.opacity = 0
    Magic.style.opacity = 0
    Wizards.style.opacity = 0
    Hornets.style.opacity = 0

    ti.clear()
    ti.output("Does your team have a basketball in their logo")

    let basketball = await ti.readYesOrNo()
    if (basketball == true) {
      Bulls.style.opacity = 0
      Bucks.style.opacity = 0
      Cavs.style.opacity = 0
      ti.output("Has Paul George played for your team?")
      let pg = await ti.readYesOrNo()
      if (pg == true) {
        Pistons.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Indiana Pacers')
      } else {
        Pacers.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Detroit Pistons')
      }



    } else {
      Pacers.style.opacity = 0
      Pistons.style.opacity = 0
      ti.output("Does your team have an animal in the logo")
      let animal = await ti.readYesOrNo()
      if (animal == true) {
        Cavs.style.opacity = 0
        ti.output("Did Michael Jordan play on your team?")
        let mj = await ti.readYesOrNo()
        if (mj == true) {
          Bucks.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Chicago Bulls')
        } else {
          Bulls.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Milaukee Bucks')
        }

      } else {
        Bulls.style.opacity = 0
        Bucks.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Cleveland Cavaliers')
      }

    }

  } //Central
  else 
  {   //south east
    Nets.style.opacity = 0
    Celtics.style.opacity = 0
    Knicks.style.opacity = 0
    Sixers.style.opacity = 0
    Raptors.style.opacity = 0

    Bulls.style.opacity = 0
    Bucks.style.opacity = 0
    Pacers.style.opacity = 0
    Pistons.style.opacity = 0
    Cavs.style.opacity = 0
    ti.clear()
    ti.output("Does your team have a living creature in the logo?")

    let living = await ti.readYesOrNo()
    if (living == true) {
      Heat.style.opacity = 0
      Magic.style.opacity = 0
      Wizards.style.opacity = 0
      ti.output("Does your teams logo have red in it?")
      let red = await ti.readYesOrNo()
      if (red == true) {
        Hornets.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Atlanta Hawks')
      } else {

        Hawks.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Charlotte Hornets')
      }
    } else {
      Hawks.style.opacity = 0
      Hornets.style.opacity = 0
      ti.output("Does your team have sorcery included in their name?")
      let sorcery = await ti.readYesOrNo()
      if (sorcery == true) {
        Heat.style.opacity = 0
        ti.output("Does your team have a monument in their logo?")
        let monument = await ti.readYesOrNo()
        if (monument == true) {
          Magic.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Washington Wizards')
        } else {
          Wizards.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Orlando Magic')
        }
      } else {
        ti.clear()
        Magic.style.opacity = 0
        Wizards.style.opacity = 0
        ti.output('Your team is : The Miami Heat')
      }
    }
  }// southeast
}
else {
  Celtics.style.opacity = 0
  Nets.style.opacity = 0
  Knicks.style.opacity = 0
  Sixers.style.opacity = 0
  Raptors.style.opacity = 0
  Cavs.style.opacity = 0
  Bulls.style.opacity = 0
  Pistons.style.opacity = 0
  Pacers.style.opacity = 0
  Bucks.style.opacity = 0
  Hawks.style.opacity = 0
  Hornets.style.opacity = 0
  Heat.style.opacity = 0
  Magic.style.opacity = 0
  Wizards.style.opacity = 0

  //Western Conference
  ti.output("You picked Western");
  ti.output("Which division is your team in?")
  let division = await ti.readChoice(['North West', 'Pacific', 'South West'])
  if (division == 'North West') {
    Warriors.style.opacity = 0
    Clippers.style.opacity = 0
    Lakers.style.opacity = 0
    Suns.style.opacity = 0
    Kings.style.opacity = 0

    Mavs.style.opacity = 0
    Rockets.style.opacity = 0
    Grizzlies.style.opacity = 0
    Pelicins.style.opacity = 0
    Spurs.style.opacity = 0
    ti.clear()
    ti.output('Does your team have yellow in the logo')
    let yellow = await ti.readYesOrNo()

    if (yellow == true) {
      Timberwolves.style.opacity = 0
      Blazers.style.opacity = 0
      Thunder.style.opacity = 0
      ti.output('Did your team just win the NBA championship')
      let championship = await ti.readYesOrNo()
      if (championship == true) {
        Jazz.style.opacity = 0
        ti.clear()
        ti.output("Your team is : The Denver Nuggets ")
      } else {
        ti.clear()
        Nuggets.style.opacity = 0
        ti.output("Your team is : The Utah Jazz ")
      }
    }
    else {
      Jazz.style.opacity = 0
      Nuggets.style.opacity = 0
      ti.output('Does your team have a blue in the logo')
      let bluee = await ti.readYesOrNo()
      if (bluee == true) {
        Blazers.style.opacity = 0
        ti.output('Does your team have an animal in the logo')
        let anima = await ti.readYesOrNo()
        if (anima == true) {
          Thunder.style.opacity = 0
          ti.clear()
          ti.output("Your team is : The Minnesota Timberwolves ")
        } else {
          ti.clear()
          Timberwolves.style.opacity = 0
          ti.output("Your team is : The Oklahoma City Thunder ")
        }
      }
      else {
        Timberwolves.style.opacity = 0
        Thunder.style.opacity = 0
        ti.clear()
        ti.output("Your team is : The Portland Trailblazers ")
      }


    }

  }





  else if (division == "Pacific") {
    Nuggets.style.opacity = 0
    Timberwolves.style.opacity = 0
    Thunder.style.opacity = 0
    Blazers.style.opacity = 0
    Jazz.style.opacity = 0

    Mavs.style.opacity = 0
    Rockets.style.opacity = 0
    Grizzlies.style.opacity = 0
    Pelicins.style.opacity = 0
    Spurs.style.opacity = 0
    ti.clear()
    ti.output('Is your team in Los Angeles')
    let blueee = await ti.readYesOrNo()

    if (blueee == true) {
      Warriors.style.opacity = 0
      Suns.style.opacity = 0
      Kings.style.opacity = 0
      ti.output('Does your team have LeBron James')
      let championship = await ti.readYesOrNo()
      if (championship == true) {
        Clippers.style.opacity = 0
        ti.clear()
        ti.output("Your team is : The Los Angeles Lakers ")
      } else {
        ti.clear()
        Lakers.style.opacity = 0
        ti.output("Your team is : The Los Angeles Clippers ")
      }
    }
    else {
      Clippers.style.opacity = 0
      Lakers.style.opacity = 0
      ti.output('Does your team have a purple as one of the team colors')
      let purple = await ti.readYesOrNo()
      if (purple == true) {

        Clippers.style.opacity = 0
        Warriors.style.opacity = 0
        ti.output('Is your team in California')
        let cali = await ti.readYesOrNo()
        if (cali == true) {
          Suns.style.opacity = 0
          ti.clear()
          ti.output("Your team is : The Sacramento Kings ")
        } else {
          ti.clear()
          Kings.style.opacity = 0
          ti.output("Your team is : The Phoenix Suns")
        }
      }
      else {
        Kings.style.opacity = 0
        Suns.style.opacity = 0
        ti.clear()
        ti.output("Your team is : The Golden State Warrioirs ")
      }


    }




  }
  else {     //south west
    Nuggets.style.opacity = 0
    Timberwolves.style.opacity = 0
    Thunder.style.opacity = 0
    Blazers.style.opacity = 0
    Jazz.style.opacity = 0

    Warriors.style.opacity = 0
    Clippers.style.opacity = 0
    Lakers.style.opacity = 0
    Suns.style.opacity = 0
    Kings.style.opacity = 0
    ti.clear()
    ti.output("Does your team have an animal in its logo?")
    let animal = await ti.readYesOrNo()
    if (animal == false) {
      Mavs.style.opacity = 0
      Grizzlies.style.opacity = 0
      Pelicins.style.opacity = 0
      ti.output("Did your team draft first overall in the 2023 draft?")
      let draft = await ti.readYesOrNo()
      if (draft == true) {
        Rockets.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The San Antonio Spurs')
      } else
        
      {
        Spurs.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Houston Rockets')
      }
    } else {
      Rockets.style.opacity = 0
      Spurs.style.opacity = 0
      ti.output("Does your team have a basketball in its logo?")
      let basketball2 = await ti.readYesOrNo()
      if (basketball2 == true) {
        Grizzlies.style.opacity = 0
        ti.output("Does Luka Doncic play for your team?")
        let luka = await ti.readYesOrNo()
        if (luka == true) {
          Pelicins.style.opacity = 0
          ti.clear()
          ti.output('Your team is : The Dallas Mavericks')

        } else {
          ti.clear()
          Mavs.style.opacity = 0
          ti.output('Your team is : The New Orleans Pelicans')
        }

      } 
      else 
      {
        Mavs.style.opacity = 0
        Pelicins.style.opacity = 0
        ti.clear()
        ti.output('Your team is : The Memphis Grizzlies')

      }
    }
  };

} // western conference

  
  ti.output("Play Again?")
  let yes = await ti.readYesOrNo()
  if (yes == true){
    replay()
  }
  else {ti.output("Thanks For Playing!")}
}
replay()