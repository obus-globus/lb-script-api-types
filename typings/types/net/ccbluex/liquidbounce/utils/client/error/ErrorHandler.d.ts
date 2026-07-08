import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ErrorHandler$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/client/error/ErrorHandler$Companion.d.ts'
import type { QuickFix } from '../../../../../../net/ccbluex/liquidbounce/utils/client/error/QuickFix.d.ts'
/**
 * The ErrorHandler class is responsible for handling and reporting errors encountered by the application.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/error/ErrorHandler.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/error/ErrorHandler.kt:44}
 */
export class ErrorHandler extends Object {
    static Companion: ErrorHandler$Companion;
    static fatal(paramarg0: Throwable): void;
    static fatal(paramarg0: Throwable, paramarg1: QuickFix): void;
    static fatal(paramarg0: Throwable, paramarg1: QuickFix, paramarg2: boolean): void;
    static fatal(error: Throwable, quickFix: QuickFix, needToReport: boolean, additionalMessage: string): void;
    private constructor(error: Throwable, quickFix: QuickFix | null, additionalMessage: string | null, needToReport: boolean)
    // private additionalMessage: string | null;
    // private builder: StringBuilder;
    // private error: Throwable;
    // private needToReport: boolean;
    // private quickFix: QuickFix | null;
    // private /*not mapped: */ getTitle(): string;
    buildAndShowMessage(): boolean;
    // private error(): StringBuilder;
    // private header(): StringBuilder;
    // private quickFix(): StringBuilder;
    // private reportMessage(): StringBuilder;
    // private stacktrace(): StringBuilder;
    // private systemSpecs(): StringBuilder;
}