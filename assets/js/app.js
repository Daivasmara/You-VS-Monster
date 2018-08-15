new Vue({
  el: '#app',
  data: {
    player1: 'PLAYER 1',
    player2: 'PLAYER 2',
    showInput1: false,
    showInput2: false,
    player1Health: 100,
    player2Health: 100,
    player1Damage: 0,
    player2Damage: 0,
    player1Heal: 0,
    player2Heal: 0,
    gameIsStarting: false,
    buttonDisabled: false,
    logDisplayed: '',
    resultDisplayed: ''
  },
  methods: {
    attack: function(min, max){
      this.player1Damage = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.player2Damage = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.player1Health -= this.player1Damage,
      this.player2Health -= this.player2Damage,
      this.logDisplayed = 'damage'
    },
    heal: function(min, max){
      this.player1Heal = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.player2Heal = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.player1Health += this.player1Heal,
      this.player2Health += this.player2Heal,
      this.logDisplayed = 'heal'
    },
    gameState: function(){
      this.gameIsStarting = !this.gameIsStarting,
      this.player1Health = 100,
      this.player2Health = 100,
      this.logDisplayed = '',
      this.resultDisplayed = ''
    },
    tryAgain: function(){
      this.gameState(),
      this.buttonDisabled = !this.buttonDisabled
    }
  },
  watch: {
    player1Health: function(){
      if (this.player1Health < 1){
        this.player1Health = 0,
        this.buttonDisabled = true,
        this.resultDisplayed = 'player2win'
      } else if (this.player1Health > 99){
        this.player1Health = 100
      } else {
        this.player1Health = this.player1Health
      }
    },
    player2Health: function(){
      if (this.player2Health < 1){
        this.player2Health = 0,
        this.buttonDisabled = true,
        this.resultDisplayed = 'player1win'
      } else if (this.player2Health > 99){
        this.player2Health = 100
      } else {
        this.player2Health = this.player2Health
      }
    }
  }
});
