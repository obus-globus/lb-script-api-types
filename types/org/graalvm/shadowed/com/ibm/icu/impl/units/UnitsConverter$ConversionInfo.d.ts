import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UnitsConverter$ConversionInfo extends Object {
    constructor()
    conversionRate: BigDecimal;
    offset: BigDecimal;
    reciprocal: boolean;
}