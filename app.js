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
    logDisplayed: ''
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
    giveUp: function(){
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.gameIsStarting = !this.gameIsStarting,
      this.logDisplayed = ''
    }
  }
});
