import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { IntPredicate } from '../../../../../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * https://en.wikipedia.org/wiki/Unicode_block
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt#L187 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt:187}
 */
export class CustomAntiBotMode$Name$CharacterValidator extends Enum<CustomAntiBotMode$Name$CharacterValidator> implements IntPredicate, Tagged {
    static CJK_UNIFIED_IDEOGRAPHS: CustomAntiBotMode$Name$CharacterValidator;
    static CYRILLIC: CustomAntiBotMode$Name$CharacterValidator;
    static Companion: Tagged$Companion;
    static VANILLA: CustomAntiBotMode$Name$CharacterValidator;
    static getEntries(): CustomAntiBotMode$Name$CharacterValidator[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CustomAntiBotMode$Name$CharacterValidator;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    test(string: string): boolean;
    name(): "VANILLA" | "CYRILLIC" | "CJK_UNIFIED_IDEOGRAPHS";
}