import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { RandomGenerator } from '../../../../../java/util/random/RandomGenerator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { PercentageChance } from '../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
export class PercentageChanceKt extends Object {
    static percentageChance(self: ValueGroup, name: string, default_: number, range: ClosedFloatingPointRange<number>, randomGetter: () => RandomGenerator): PercentageChance<number>;
    static percentageChance(self: ValueGroup, name: string, default_: number, range: { start: number; endInclusive: number; step: number }, randomGetter: () => RandomGenerator): PercentageChance<number>;
}