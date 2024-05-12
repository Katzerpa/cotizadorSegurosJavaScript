
//=============================================================
//Constantes
//=============================================================
const PLAN_BASIC = "Plan Básico";
const PLAN_STANDART = "Plan Estándar";
const PLAN_PREMIUM = "Plan Premium";

const PLAN_BASIC_CAPITAL = 750000;
const PLAN_STANDART_CAPITAL = 850000;
const PLAN_PREMIUM_CAPITAL = 950000;

const SYSTEM_DATE = new Date();

//=======================================================================
//cacular coberturas 
//=======================================================================
class Policy {
    policyType = "";
    capital = 0.00;
    coverage_01 = 0.00;
    coverage_02 = 0.00;
    coverage_03 = 0.00;
    totalAmount = 0.00;
    amountNcapital = 0.00;

    constructor(policyType, capital) {
        this.policyType = policyType;
        this.capital = capital;
    }

}
//Sub-clase poliza basica
class BasicPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.70 / 12;
        this.coverage_01 = this.amountNcapital * 1.70 / 12;
        this.coverage_02 = this.amountNcapital * 1.30 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02;
        this.totalAmountMonth = this.totalAmount /12;
    }
}
//Sub-clase poliza standart
class StandartPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.80 / 12;
        this.coverage_01 = this.amountNcapital * 1.70 / 12;
        this.coverage_02 = this.amountNcapital * 1.30 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02;
        this.totalAmountMonth = this.totalAmount /12;
    }
}
//Sub-clase poliza premium
class PremiumPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.90 / 12;
        this.coverage_01 = this.amountNcapital * 1.60 / 12;
        this.coverage_02 = this.amountNcapital * 1.50 / 12;
        this.coverage_03 = this.amountNcapital * 1.80 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02 + this.coverage_03;
        this.totalAmountMonth = this.totalAmount /12;
    }
}