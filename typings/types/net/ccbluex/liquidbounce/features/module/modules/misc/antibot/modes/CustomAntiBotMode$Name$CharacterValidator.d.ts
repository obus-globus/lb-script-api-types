import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { IntPredicate } from '../../../../../../../../../java/util/function/IntPredicate.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * https://en.wikipedia.org/wiki/Unicode_block
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt#L187 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode.kt:187}
 */
export class CustomAntiBotMode$Name$CharacterValidator extends Enum<CustomAntiBotMode$Name$CharacterValidator> implements IntPredicate, Tagged {
    static CJK_UNIFIED_IDEOGRAPHS: CustomAntiBotMode$Name$CharacterValidator;
    static CYRILLIC: CustomAntiBotMode$Name$CharacterValidator;
    static Companion: Tagged$Companion;
    static VANILLA: CustomAntiBotMode$Name$CharacterValidator;
    static getEntries(): CustomAntiBotMode$Name$CharacterValidator[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CustomAntiBotMode$Name$CharacterValidator;
    static values(): CustomAntiBotMode$Name$CharacterValidator[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    test(string: string): boolean;
    name(): "VANILLA" | "CYRILLIC" | "CJK_UNIFIED_IDEOGRAPHS";
}