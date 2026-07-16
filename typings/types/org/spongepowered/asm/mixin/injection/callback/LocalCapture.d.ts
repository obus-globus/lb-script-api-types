import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LocalCapture extends Enum<LocalCapture> {
    static CAPTURE_FAILEXCEPTION: LocalCapture;
    static CAPTURE_FAILHARD: LocalCapture;
    static CAPTURE_FAILSOFT: LocalCapture;
    static NO_CAPTURE: LocalCapture;
    static PRINT: LocalCapture;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocalCapture;
    static values(): LocalCapture[];
    private constructor()
    private constructor(arg2: boolean, arg3: boolean)
    // private captureLocals: boolean;
    // private printLocals: boolean;
    isCaptureLocals(): boolean;
    isPrintLocals(): boolean;
    name(): "NO_CAPTURE" | "PRINT" | "CAPTURE_FAILSOFT" | "CAPTURE_FAILHARD" | "CAPTURE_FAILEXCEPTION";
}