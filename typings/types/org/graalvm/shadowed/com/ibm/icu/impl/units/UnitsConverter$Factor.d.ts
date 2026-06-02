import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeasureUnit$MeasurePrefix } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
export class UnitsConverter$Factor extends Object {
    static processFactor(paramfactor: string): UnitsConverter$Factor;
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
    // private addEntity(entity: string, power: number): void;
    // private addPoweredEntity(poweredEntity: string): void;
    applyPrefix(unitPrefix: MeasureUnit$MeasurePrefix): UnitsConverter$Factor;
    copy(): UnitsConverter$Factor;
    divide(other: UnitsConverter$Factor): UnitsConverter$Factor;
    getConversionRate(): BigDecimal;
    // private multiply(value: BigDecimal, power: number): void;
    multiply(other: UnitsConverter$Factor): UnitsConverter$Factor;
    power(power: number): UnitsConverter$Factor;
}