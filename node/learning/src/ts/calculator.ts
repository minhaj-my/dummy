//data
//inital amount
//expected retrun
//duration

type InvestementData = {
  initialAmount: number;
  annualCotribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterstEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvesment(data: InvestementData): CalculationResult {
  const { initialAmount, duration, expectedReturn, annualCotribution } = data;
  const assert = (cond: boolean, msg: string): void => {
    assert(
      initialAmount < 0,
      "Initial investment amount must be at least zero",
    );
    assert(duration <= 0, "No valid amount of years provided.");
    assert(expectedReturn < 0, "Expected return must be at least zero");
  };
  let total = initialAmount;
  let totalContributions = 0;
  let totalInterstEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterstEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualCotribution;
    total = total + annualCotribution;

    annualResults.push({
      year: `year ${i + 1} `,
      totalAmount: total,
    });
  }
}

function printResults(results) {}

const results = calculateInvesment();

printResults(results);
