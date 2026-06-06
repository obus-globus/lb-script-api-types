import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { IntPredicate } from '../../../../../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * https://en.wikipedia.org/wiki/Unicode_block
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt#L184 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt:184}
 */
export class CustomAntiBotMode$Name$CharacterValidator extends Enum<CustomAntiBotMode$Name$CharacterValidator> implements IntPredicate, Tagged {
    static CJK_UNIFIED_IDEOGRAPHS: CustomAntiBotMode$Name$CharacterValidator;
    /**
     * Cyrillic + Cyrillic Supplement
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt#L197 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt:197}
     */
    static CYRILLIC: CustomAntiBotMode$Name$CharacterValidator;
    static Companion: Tagged$Companion;
    static VANILLA: CustomAntiBotMode$Name$CharacterValidator;
    static getEntries(): CustomAntiBotMode$Name$CharacterValidator[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CustomAntiBotMode$Name$CharacterValidator;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    negate(): (param0: number) => kotlin.Boolean;
    or(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    test(string: string): boolean;
    name(): "VANILLA" | "CYRILLIC" | "CJK_UNIFIED_IDEOGRAPHS";
}