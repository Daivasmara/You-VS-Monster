new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    playerDamage: 0,
    monsterDamage: 0,
    playerHeal: 0,
    monsterHeal: 0,
    gameIsStarting: false,
    buttonDisabled: false,
    healDisabled: true,
    logDisplayed: '',
    resultDisplayed: ''
  },
  methods: {
    attack: function(min, max){
      this.playerDamage = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.monsterDamage = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.playerHealth -= this.playerDamage,
      this.monsterHealth -= this.monsterDamage,
      this.logDisplayed = 'damage'
    },
    heal: function(min, max){
      this.playerHeal = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.monsterHeal = Math.floor(Math.random() * (max - min + 1) ) + min;
      this.playerHealth += this.playerHeal,
      this.monsterHealth += this.monsterHeal,
      this.logDisplayed = 'heal'
    },
    gameState: function(){
      this.gameIsStarting = !this.gameIsStarting,
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.logDisplayed = '',
      this.resultDisplayed = ''
    },
    tryAgain: function(){
      this.gameState(),
      this.buttonDisabled = !this.buttonDisabled
    }
  },
  watch: {
    playerHealth: function(){
      if (this.playerHealth < 1){
        this.playerHealth = 0,
        this.buttonDisabled = true,
        this.resultDisplayed = 'lose',
        this.healDisabled = false
      } else if (this.playerHealth > 99){
        this.playerHealth = 100,
        this.healDisabled = true
      } else {
        this.playerHealth = this.playerHealth,
        this.healDisabled = false
      }
    },
    monsterHealth: function(){
      if (this.monsterHealth < 1){
        this.monsterHealth = 0,
        this.buttonDisabled = true,
        this.resultDisplayed = 'win',
        this.healDisabled = false
      } else if (this.monsterHealth > 99){
        this.monsterHealth = 100,
        this.healDisabled = true
      } else {
        this.monsterHealth = this.monsterHealth,
        this.healDisabled = false
      }
    }
  }
});
