
class Candleholder { constructor(madeOf, costs, height, width, weight) {
    this.madeOf = madeOf;
    this.costs = costs;
    this.height = height;
    this.width = width;
    this.weight = weight;
    this.candle = {
      litCandle: false,
    };
  }
  liteCandle(candleState) {
    this.litCandle = candleState;
    console.log("you successfully lit a candle:", Candleholder.candle.litCandle)
  }
}

export default Candleholder;



