import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { MathContext } from '../../../../../../../java/math/MathContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
export class Scale extends Object {
    static byBigDecimal(parammultiplicand: BigDecimal): Scale;
    static byDouble(parammultiplicand: number): Scale;
    static byDoubleAndPowerOfTen(parammultiplicand: number, parampower: number): Scale;
    static none(): Scale;
    static powerOfTen(parampower: number): Scale;
    private constructor(magnitude: number, arbitrary: BigDecimal)
    private constructor(magnitude: number, arbitrary: BigDecimal, mc: MathContext)
    // private arbitrary: BigDecimal;
    // private magnitude: number;
    // private mc: MathContext;
    // private reciprocal: BigDecimal;
    applyReciprocalTo(quantity: DecimalQuantity): void;
    applyTo(quantity: DecimalQuantity): void;
    isValid(): boolean;
    withMathContext(mc: MathContext): Scale;
}