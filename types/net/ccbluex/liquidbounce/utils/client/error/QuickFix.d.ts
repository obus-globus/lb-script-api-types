import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Instructions } from '../../../../../../net/ccbluex/liquidbounce/utils/client/error/Instructions.d.ts'
export class QuickFix extends Enum<QuickFix> {
    static BROWSER_FAILED_TO_LOAD_UI: QuickFix;
    static BROWSER_IS_NOT_RESPONDING: QuickFix;
    static CLASS_NOT_FOUND: QuickFix;
    static D3D11_UNSATISFIED_LINK: QuickFix;
    static DOWNLOAD_JCEF_FAILED: QuickFix;
    static JCEF_ISNT_COMPATIBLE_WITH_THAT_SYSTEM: QuickFix;
    static JCEF_UNSATISFIED_LINK: QuickFix;
    static getEntries(): QuickFix[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): QuickFix;
    static values(): (Object | null)[];
    private constructor(description: string, testError: Function1<Throwable, boolean>, whatYouNeed: Instructions | null, whatToDo: Instructions | null)
    readonly description: string;
    readonly messages: { [key: string]: Instructions | null };
    readonly testError: (param0: Throwable) => boolean;
    readonly whatToDo: Instructions | null;
    readonly whatYouNeed: Instructions | null;
    name(): "JCEF_ISNT_COMPATIBLE_WITH_THAT_SYSTEM" | "DOWNLOAD_JCEF_FAILED" | "CLASS_NOT_FOUND" | "D3D11_UNSATISFIED_LINK" | "JCEF_UNSATISFIED_LINK" | "BROWSER_IS_NOT_RESPONDING" | "BROWSER_FAILED_TO_LOAD_UI";
}