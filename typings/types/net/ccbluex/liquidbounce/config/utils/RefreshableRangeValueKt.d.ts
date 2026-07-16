import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { RefreshableFloatState } from '../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableFloatState.d.ts'
import type { RefreshableIntState } from '../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableIntState.d.ts'
export class RefreshableRangeValueKt extends Object {
    static asRefreshable(self: Value<ClosedFloatingPointRange<number>>): RefreshableFloatState;
    static asRefreshable(self: Value<{ start: number; endInclusive: number; step: number }>): RefreshableIntState;
}