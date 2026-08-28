import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * Does nothing; Has no value.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:51}
 */
export class NoneRangedValueProvider extends Object implements RangedValueProvider {
    static INSTANCE: NoneRangedValueProvider;
    equals(other: Object | null): boolean;
    hashCode(): number;
    register(offeredValueGroup: ValueGroup): void | null;
    toString(): string;
}