import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * TextFieldProtect Module
 *
 * Hides rendered text of text field widget when it matches certain patterns.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTextFieldProtect.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTextFieldProtect.kt:32}
 */
export class ModuleTextFieldProtect extends ClientModule {
    static INSTANCE: ModuleTextFieldProtect;
    // private MASK_CHAR: string;
    // private patterns: Regex[];
    // private /*not mapped: */ getPatterns(): Regex[];
    protect(input: string, firstCharacterIndex: number): string;
}