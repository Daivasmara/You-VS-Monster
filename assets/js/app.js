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
    gif: 0,
    gifImage: '',
    gameIsStarting: false,
    buttonDisabled: false,
    logDisplayed: '',
    resultDisplayed: ''
  },
  methods: {
    attack: function(min, max){
      this.player1Damage = Math.floor(Math.random() * (max - min + 1) ) + min,
      this.player2Damage = Math.floor(Math.random() * (max - min + 1) ) + min,
      this.gif = Math.floor(Math.random() * (3 - 1 + 1) ) + 1,
      this.player1Health -= this.player1Damage,
      this.player2Health -= this.player2Damage,
      this.logDisplayed = 'damage'
      console.log(this.gif);
    },
    heal: function(min, max){
      this.player1Heal = Math.floor(Math.random() * (max - min + 1) ) + min,
      this.player2Heal = Math.floor(Math.random() * (max - min + 1) ) + min,
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
        this.gifImage = '',
        this.resultDisplayed = 'player2win'
      } else if (this.player1Health > 99){
        this.player1Health = 100
      } else {
        this.player1Health = this.player1Health
      }
    },
    gif: function(){
      if (this.gif === 1){
        this.gifImage = 'https://media.giphy.com/media/l0Iy87qFTu0gDegw0/giphy.gif'
      } else if (this.gif === 2){
        this.gifImage = 'https://media.giphy.com/media/14rWmwSwdZokSI/giphy.gif'
      } else if (this.gif === 3){
        this.gifImage = 'https://media.giphy.com/media/HIxtxVhs1LRm0/giphy.gif'
      }
    },
    player2Health: function(){
      if (this.player2Health < 1){
        this.player2Health = 0,
        this.buttonDisabled = true,
        this.gifImage = '',
        this.resultDisplayed = 'player1win'
      } else if (this.player2Health > 99){
        this.player2Health = 100
      } else {
        this.player2Health = this.player2Health
      }
    }
  }
});
