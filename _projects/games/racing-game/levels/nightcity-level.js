import GameEnvBackground from '@assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from './RacingPlayer.js';
import SplineBarrier from '@assets/js/GameEnginev1.1/essentials/SplineBarrier.js';
import TimeLapScreen from './TimeLapScreen.js';


class GameLevelNightCity {
 constructor(gameEnv) {
   const path = gameEnv.path;
   const background_data = {
     name: "Night City Course",
     greeting: "Welcome to the Night City!",
     src: path + '/images/projects/racing-game/nightcitylevel.png',
     pixels: { height: 360, width: 643 }
   };
   const player_data = {
       name: "Red Car",
       greeting: "I'm the red car!",
       src: path + '/images/projects/racing-game/Directions_red_car.png',
       SCALE_FACTOR: 20,
       STEP_FACTOR: 1100,
       INIT_POSITION: { x: 360 / 750, y: 500 / 570},
       pixels: { height: 1024, width: 1536 },
       orientation: { rows: 4, columns: 4 },
       up:        { row: 3, start: 0, columns: 1 },
       upRight:   { row: 0, start: 2, columns: 1, rotate: Math.PI },
       right:     { row: 1, start: 0, columns: 1 },
       downRight: { row: 2, start: 0, columns: 1 },
       down:      { row: 0, start: 0, columns: 1 },
       downLeft:  { row: 0, start: 2, columns: 1 },
       left:      { row: 3, start: 2, columns: 1 },
       upLeft:    { row: 2, start: 0, columns: 1, rotate: Math.PI },
       hitbox: { widthPercentage: 0.5, heightPercentage: 0.5 },
       keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
   }
   const other_data = {
       name: "Blue Car",
       greeting: "I'm the blue car!",
       src: path + '/images/projects/racing-game/Directions_blue_car.png',
       SCALE_FACTOR: 20,
       STEP_FACTOR: 1100,
       INIT_POSITION: {x: 340 / 740, y: 500 / 585},
       pixels: { height: 1024, width: 1536 },
       orientation: { rows: 4, columns: 4 },
       up:        { row: 3, start: 0, columns: 1 },
       upRight:   { row: 0, start: 2, columns: 1, rotate: Math.PI },
       right:     { row: 3, start: 2, columns: 1, rotate: Math.PI },
       downRight: { row: 2, start: 0, columns: 1 },
       down:      { row: 0, start: 0, columns: 1 },
       downLeft:  { row: 0, start: 2, columns: 1 },
       left:      { row: 3, start: 2, columns: 1 },
       upLeft:    { row: 2, start: 0, columns: 1, rotate: Math.PI },
       hitbox: { widthPercentage: 0.5, heightPercentage: 0.5 },
       keypress: { up: 38, left: 37, down: 40, right: 39 } // Arrow keys
   }
   const barrierData1 = {
     id: "barrier-2",
     coordinateSpace: "normalized",
     splinePoints: [{"x":0.4386,"y":0.9956},{"x":0.4372,"y":0.8907},{"x":0.4372,"y":0.8929},{"x":0.4372,"y":0.8929},{"x":0.4372,"y":0.8929},{"x":0.3255,"y":0.8884},{"x":0.2055,"y":0.8661},{"x":0.1103,"y":0.7947},{"x":0.0745,"y":0.6965},{"x":0.0883,"y":0.6094},{"x":0.149,"y":0.5424},{"x":0.1972,"y":0.5402},{"x":0.251,"y":0.6049},{"x":0.3283,"y":0.6875},{"x":0.4124,"y":0.7121},{"x":0.5076,"y":0.7143},{"x":0.5793,"y":0.6831},{"x":0.5683,"y":0.6295},{"x":0.5255,"y":0.5916},{"x":0.4359,"y":0.5826},{"x":0.349,"y":0.5514},{"x":0.2828,"y":0.4755},{"x":0.1903,"y":0.4554},{"x":0.1338,"y":0.3929},{"x":0.1338,"y":0.2947},{"x":0.1834,"y":0.2277},{"x":0.2593,"y":0.2166},{"x":0.32,"y":0.2679},{"x":0.3986,"y":0.3192},{"x":0.4662,"y":0.2947},{"x":0.5214,"y":0.2344},{"x":0.5807,"y":0.2054},{"x":0.6979,"y":0.2188},{"x":0.8014,"y":0.2366},{"x":0.8648,"y":0.2902},{"x":0.9145,"y":0.4041},{"x":0.9131,"y":0.4956},{"x":0.8497,"y":0.5424},{"x":0.7572,"y":0.5424},{"x":0.7324,"y":0.5737},{"x":0.771,"y":0.6072},{"x":0.8345,"y":0.6116},{"x":0.8979,"y":0.6719},{"x":0.9255,"y":0.7634},{"x":0.891,"y":0.8505},{"x":0.7972,"y":0.8929},{"x":0.6731,"y":0.8929},{"x":0.5848,"y":0.8951},{"x":0.5821,"y":0.9911}],
     visible: false,
     hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
     fromOverlay: true,
   };
   const barrierData2 = {
     id: "barrier-3",
     coordinateSpace: "normalized",
     splinePoints: [{"x":0.5145,"y":0.8125},{"x":0.3034,"y":0.8058},{"x":0.189,"y":0.7523},{"x":0.1393,"y":0.6764},{"x":0.1393,"y":0.6764},{"x":0.1641,"y":0.625},{"x":0.1986,"y":0.6429},{"x":0.2372,"y":0.6965},{"x":0.3186,"y":0.7657},{"x":0.4676,"y":0.7857},{"x":0.6083,"y":0.7701},{"x":0.651,"y":0.6898},{"x":0.629,"y":0.5782},{"x":0.629,"y":0.5782},{"x":0.531,"y":0.5179},{"x":0.4331,"y":0.5157},{"x":0.3628,"y":0.4621},{"x":0.2897,"y":0.4018},{"x":0.2193,"y":0.3862},{"x":0.1917,"y":0.3326},{"x":0.1917,"y":0.3326},{"x":0.2179,"y":0.288},{"x":0.2538,"y":0.2947},{"x":0.3103,"y":0.3438},{"x":0.4179,"y":0.3907},{"x":0.4869,"y":0.3728},{"x":0.5545,"y":0.2969},{"x":0.6372,"y":0.2746},{"x":0.7683,"y":0.2924},{"x":0.7683,"y":0.2924},{"x":0.8428,"y":0.3795},{"x":0.8469,"y":0.4576},{"x":0.7683,"y":0.4621},{"x":0.68,"y":0.5134},{"x":0.6634,"y":0.6049},{"x":0.7255,"y":0.6674},{"x":0.8179,"y":0.6942},{"x":0.8441,"y":0.759},{"x":0.8014,"y":0.8036},{"x":0.5145,"y":0.8125}],
     visible: false,
     hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
     fromOverlay: true,
   };
   const barrierData3 = {
     id: "barrier-4",
     coordinateSpace: "normalized",
     splinePoints: [{"x":0.4474,"y":0.9352},{"x":0.4568,"y":0.933},{"x":0.458,"y":0.9932}],
     visible: false,
     hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
     fromOverlay: true,
   };
   const barrierData4 = {
     id: "barrier-5",
     coordinateSpace: "normalized",
     splinePoints: [{"x":0.4386,"y":0.9956},{"x":0.4372,"y":0.8907},{"x":0.4372,"y":0.8929},{"x":0.4372,"y":0.8929},{"x":0.4372,"y":0.8929},{"x":0.3255,"y":0.8884},{"x":0.2055,"y":0.8661},{"x":0.1103,"y":0.7947},{"x":0.0745,"y":0.6965},{"x":0.0883,"y":0.6094},{"x":0.149,"y":0.5424},{"x":0.1972,"y":0.5402},{"x":0.251,"y":0.6049},{"x":0.3283,"y":0.6875},{"x":0.4124,"y":0.7121},{"x":0.5076,"y":0.7143},{"x":0.5793,"y":0.6831},{"x":0.5683,"y":0.6295},{"x":0.5255,"y":0.5916},{"x":0.4359,"y":0.5826},{"x":0.349,"y":0.5514},{"x":0.2828,"y":0.4755},{"x":0.1903,"y":0.4554},{"x":0.1338,"y":0.3929},{"x":0.1338,"y":0.2947},{"x":0.1834,"y":0.2277},{"x":0.2593,"y":0.2166},{"x":0.32,"y":0.2679},{"x":0.3986,"y":0.3192},{"x":0.4662,"y":0.2947},{"x":0.5214,"y":0.2344},{"x":0.5807,"y":0.2054},{"x":0.6979,"y":0.2188},{"x":0.8014,"y":0.2366},{"x":0.8648,"y":0.2902},{"x":0.9145,"y":0.4041},{"x":0.9131,"y":0.4956},{"x":0.8497,"y":0.5424},{"x":0.7572,"y":0.5424},{"x":0.7324,"y":0.5737},{"x":0.771,"y":0.6072},{"x":0.8345,"y":0.6116},{"x":0.8979,"y":0.6719},{"x":0.9255,"y":0.7634},{"x":0.891,"y":0.8505},{"x":0.7972,"y":0.8929},{"x":0.6731,"y":0.8929},{"x":0.5848,"y":0.8951},{"x":0.5821,"y":0.9911}],
     visible: false,
     hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
     fromOverlay: true,
   };
  
   const lap_data = {
     totalLaps: 3,
     finishLine: { x: 0.568, top: 0.841, bottom: 0.939 },
     drawFinishLine: true,
     hudPosition: { x: 0.01, y: 0.02 }
   };
   this.classes = [
       {class: GameEnvBackground, data: background_data},
       {class: Player, data: player_data},
       {class: Player, data: other_data},
       { class: SplineBarrier, data: barrierData1 },
       { class: SplineBarrier, data: barrierData2 },
       { class: SplineBarrier, data: barrierData3 },
       { class: SplineBarrier, data: barrierData4 },
       { class: TimeLapScreen, data: lap_data },
   ]
 }
}


export default GameLevelNightCity;
