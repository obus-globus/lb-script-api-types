import type { ToDoubleRounder } from '../../../../com/google/common/math/ToDoubleRounder.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { RoundingMode } from '../../../../java/math/RoundingMode.d.ts'
export class BigIntegerMath$BigIntegerToDoubleRounder extends ToDoubleRounder<BigInteger> {
    private constructor()
    minus(a: BigInteger, b: BigInteger): BigInteger;
    roundToDoubleArbitrarily(bigInteger: BigInteger): number;
    sign(bigInteger: BigInteger): number;
    toX(d: number, mode: RoundingMode): BigInteger;
}