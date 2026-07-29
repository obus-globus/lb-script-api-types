import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * @see Vec3i.compareTo
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MinecraftVectorExtensions.kt:49}
 */
export class BlockPosAsLongComparator extends Object implements LongComparator {
    static INSTANCE: BlockPosAsLongComparator;
    compare(arg0: number, arg1: number): number;
    compare(k1: number, k2: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
}