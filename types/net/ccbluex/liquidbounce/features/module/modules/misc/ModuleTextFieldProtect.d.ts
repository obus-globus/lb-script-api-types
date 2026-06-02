import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * TextFieldProtect Module
 *
 * Hides rendered text of text field widget when it matches certain patterns.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTextFieldProtect.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTextFieldProtect.kt:27}
 */
export class ModuleTextFieldProtect extends ClientModule {
    static INSTANCE: ModuleTextFieldProtect;
    // private MASK_CHAR: string;
    // private patterns: Regex[];
    // private /*not mapped: */ getPatterns(): Regex[];
    protect(input: string, firstCharacterIndex: number): string;
}