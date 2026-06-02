import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { QuickFix } from '../../../../../../net/ccbluex/liquidbounce/utils/client/error/QuickFix.d.ts'
export class ErrorHandler$Companion extends Object {
    fatal(error: Throwable, quickFix: QuickFix | null, needToReport: boolean, additionalMessage: string | null): void;
}