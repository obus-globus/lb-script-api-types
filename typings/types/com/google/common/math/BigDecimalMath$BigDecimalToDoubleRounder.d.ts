import type { ToDoubleRounder } from '../../../../com/google/common/math/ToDoubleRounder.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
export class BigDecimalMath$BigDecimalToDoubleRounder extends ToDoubleRounder<BigDecimal> {
    private constructor()
    minus(a: BigDecimal, b: BigDecimal): BigDecimal;
    roundToDoubleArbitrarily(bigDecimal: BigDecimal): number;
    sign(bigDecimal: BigDecimal): number;
    toX(d: number, mode: RoundingMode): BigDecimal;
}