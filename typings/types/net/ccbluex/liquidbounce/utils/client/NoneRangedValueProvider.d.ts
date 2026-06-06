import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * Does nothing; Has no value.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:48}
 */
export class NoneRangedValueProvider extends Object implements RangedValueProvider {
    static INSTANCE: NoneRangedValueProvider;
    equals(other: Object | null): boolean;
    hashCode(): number;
    register(offeredValueGroup: ValueGroup): void | null;
    toString(): string;
}