import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../java/math/MathContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Scale extends Object {
    static byBigDecimal(paramarg0: BigDecimal): Scale;
    static byDouble(paramarg0: number): Scale;
    static byDoubleAndPowerOfTen(paramarg0: number, paramarg1: number): Scale;
    static none(): Scale;
    static powerOfTen(paramarg0: number): Scale;
    private constructor(arg0: number, arg1: BigDecimal)
    private constructor(arg0: number, arg1: BigDecimal, arg2: MathContext)
    // private arbitrary: BigDecimal;
    // private magnitude: number;
    // private mc: MathContext;
    // private reciprocal: BigDecimal;
    applyReciprocalTo(arg0: DecimalQuantity): void;
    applyTo(arg0: DecimalQuantity): void;
    isValid(): boolean;
    withMathContext(arg0: MathContext): Scale;
}