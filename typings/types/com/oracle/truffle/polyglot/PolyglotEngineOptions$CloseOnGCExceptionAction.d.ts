import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$CloseOnGCExceptionAction extends Enum<PolyglotEngineOptions$CloseOnGCExceptionAction> {
    static Ignore: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static Print: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static PrintAll: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static Throw: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$CloseOnGCExceptionAction;
    static values(): PolyglotEngineOptions$CloseOnGCExceptionAction[];
    private constructor()
    name(): "Ignore" | "Print" | "PrintAll" | "Throw";
}