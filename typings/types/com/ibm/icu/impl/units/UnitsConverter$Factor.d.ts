import type { MeasureUnit$MeasurePrefix } from '../../../../../com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitsConverter$Factor extends Object {
    static processFactor(paramarg0: string): UnitsConverter$Factor;
    constructor()
    // private exponentAMU: number;
    // private exponentFtToM: number;
    // private exponentG: number;
    // private exponentGalImpToM3: number;
    // private exponentGlucoseMolarMass: number;
    // private exponentGravity: number;
    // private exponentItemPerMole: number;
    // private exponentLbToKg: number;
    // private exponentMetersPerAU: number;
    // private exponentPi: number;
    // private exponentSecPerJulianYear: number;
    // private exponentShakuToM: number;
    // private exponentShoToM3: number;
    // private exponentSpeedOfLightMetersPerSecond: number;
    // private exponentTsuboToM2: number;
    // private factorDen: BigDecimal;
    // private factorNum: BigDecimal;
    // private addEntity(arg0: string, arg1: number): void;
    // private addPoweredEntity(arg0: string): void;
    applyPrefix(arg0: MeasureUnit$MeasurePrefix): UnitsConverter$Factor;
    copy(): UnitsConverter$Factor;
    divide(arg0: UnitsConverter$Factor): UnitsConverter$Factor;
    divide(arg0: BigDecimal): UnitsConverter$Factor;
    getConversionRate(): BigDecimal;
    multiply(arg0: UnitsConverter$Factor): UnitsConverter$Factor;
    // private multiply(arg0: BigDecimal, arg1: number): void;
    power(arg0: number): UnitsConverter$Factor;
}