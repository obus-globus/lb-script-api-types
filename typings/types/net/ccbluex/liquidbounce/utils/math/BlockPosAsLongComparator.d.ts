import type { Long2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleFunction.d.ts'
import type { Long2IntFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntFunction.d.ts'
import type { Long2LongFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongFunction.d.ts'
import type { Long2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectFunction.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * @see Vec3i.compareTo
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:49}
 */
export class BlockPosAsLongComparator extends Object implements LongComparator {
    static INSTANCE: BlockPosAsLongComparator;
    static comparing(paramarg0: (param0: number) => Object | null): (param0: number, param1: number) => number;
    static comparing(paramarg0: (param0: number) => Object | null, paramarg1: (param0: Object) => boolean): (param0: number, param1: number) => number;
    static comparingDouble(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingInt(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingLong(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    compare(arg0: number, arg1: number): number;
    compare(k1: number, k2: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
}