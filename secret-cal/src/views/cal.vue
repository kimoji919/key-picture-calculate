<script>
export default {
  data() {
    return {
      equation: "0",
      isDecimalAdded: false,
      isOperatorAdded: false,
      isStarted: false,

      isEntering: false,
    };
  },
  methods: {
    // Check if the character is + / - / × / ÷
    isOperator(character) {
      return ["+", "-", "×", "÷"].indexOf(character) > -1;
    },
    // When pressed Operators or Numbers
    append(character) {
      // Start
      if (this.equation === "0" && !this.isOperator(character)) {
        if (character === ".") {
          this.equation += "" + character;
          this.isDecimalAdded = true;
        } else {
          this.equation = "" + character;

          this.isEntering = true;
        }

        this.isStarted = true;
        return;
      }

      // If Number
      if (!this.isOperator(character)) {
        if (character === "." && this.isDecimalAdded) {
          return;
        }

        if (character === ".") {
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        } else {
          this.isOperatorAdded = false;
        }

        if (!this.isEntering) {
          this.isEntering = true;
          this.equation = "" + character;
          return;
        }

        this.equation += "" + character;
      }

      // Added Operator
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += "" + character;
        this.isDecimalAdded = false;
        this.isOperatorAdded = true;

        this.isEntering = true;
      }
    },
    // When pressed '='
    calculate() {
      let result = this.equation
        .replace(new RegExp("×", "g"), "*")
        .replace(new RegExp("÷", "g"), "/");

      let ans = eval(result);

      this.equation = (
        ans < 1.0e9 ? parseFloat(ans.toFixed(9)) : ans.toExponential(3)
      ).toString();
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;

      this.isEntering = false;
    },
    // When pressed '+/-'
    calculateToggle() {
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + "* -1";
      this.calculate();
    },
    // When pressed '%'
    calculatePercentage() {
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + "* 0.01";
      this.calculate();
    },
    // When pressed 'AC'
    clear() {
      this.equation = "0";
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.isStarted = false;

      this.isEntering = false;
    },
    play() {
      this.$router.push("/rule");
    },
  },
};
</script>
<template>
  <div id="app-ca">
    <div class="calculator">
      <div class="result" style="grid-area: result">
        <div class="display">
          {{ equation }}
        </div>
      </div>

      <button style="grid-area: ac" @click="clear">AC</button>
      <button style="grid-area: plus-minus" @click="calculateToggle">±</button>
      <button style="grid-area: percent" @click="calculatePercentage">%</button>
      <button style="grid-area: add" @click="append('+')">+</button>
      <button style="grid-area: subtract" @click="append('-')">-</button>
      <button style="grid-area: multiply" @click="append('×')">×</button>
      <button style="grid-area: divide" @click="append('÷')">÷</button>
      <button style="grid-area: equal" @click="calculate">=</button>

      <button style="grid-area: number-1" @click="append(1)">1</button>
      <button style="grid-area: number-2" @click="append(2)">2</button>
      <button style="grid-area: number-3" @click="append(3)">3</button>
      <button style="grid-area: number-4" @click="append(4)">4</button>
      <button style="grid-area: number-5" @click="append(5)">5</button>
      <button style="grid-area: number-6" @click="append(6)">6</button>
      <button style="grid-area: number-7" @click="append(7)">7</button>
      <button style="grid-area: number-8" @click="append(8)">8</button>
      <button style="grid-area: number-9" @click="append(9)">9</button>
      <button style="grid-area: number-0" @click="append(0)">0</button>

      <button style="grid-area: dot" @click="append('.')">.</button>
    </div>
    <a @click="play" style="margin-top: 68px">mode2</a>
  </div>
</template>

<style scoped>
.app-ca{

  height:100%;
  width: 100%;
opacity: 0.7;
background: #efeeee;
}
.calculator {
  --button-width: 80px;
  --button-height: 80px;

  display: grid;
  grid-template-areas:
    "result result result result"
    "ac plus-minus percent divide"
    "number-7 number-8 number-9 multiply"
    "number-4 number-5 number-6 subtract"
    "number-1 number-2 number-3 add"
    "number-0 number-0 dot equal";
  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(6, var(--button-height));

  box-shadow: -8px -8px 16px -10px rgba(255, 255, 255, 1),
    8px 8px 16px -10px rgba(0, 0, 0, 0.15);

  padding: 24px;
  border-radius: 20px;
  background: #efeeee;
  opacity: 1;
}

.calculator button {
  margin: 8px;
  padding: 0;
  border: 0;
  display: block;
  outline: none;
  border-radius: calc(var(--button-height) / 2);
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #999;
  background: linear-gradient(
    135deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(246, 246, 246, 1) 100%
  );
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
    4px 4px 10px -8px rgba(0, 0, 0, 0.3);
}

.calculator button:active {
  box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset,
    4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
}

.result {
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  border-radius: 20px;
  border: none;
  outline: medium;
  background-color: #efeeee;

  text-align: right;
  line-height: var(--button-height);
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.2px;
  color: #666;
}

a {
  display: inline-block;
  padding: 10px 20px;
  background: #0080ff;
  margin-top: 30px;
  margin-left: 130px;
  text-decoration: none;
  font-weight: 600;
  color: white;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 1);
  border-radius: 50px;
}
a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.15s;
}
a:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 10px 10px 20px rgba(0, 0, 0, 0.1),
    inset -10px -10px 20px rgb(76, 245, 245);
  transition: box-shadow 0.1s ease-out;
}
</style>