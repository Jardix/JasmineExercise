
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

it('should calculate a second monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 4,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('467.87');
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 10037,
    years: 20,
    rate: 5.6
  }
  expect(calculateMonthlyPayment(values)).toEqual('69.61')
});

it(`Should handle extreme lows`, function () {
  const values = {
    amount: 10,
    years: 1,
    rate: 3.1
  }
  expect(calculateMonthlyPayment(values)).toEqual('0.85')
});

it(`Should handle extreme highs`, function () {
  const values = {
    amount: 9999000,
    years: 100,
    rate: 99.99
  }
  expect(calculateMonthlyPayment(values)).toEqual('833166.67')
});


