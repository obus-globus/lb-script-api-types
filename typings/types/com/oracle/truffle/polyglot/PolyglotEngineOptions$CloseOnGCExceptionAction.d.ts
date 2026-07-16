import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$CloseOnGCExceptionAction extends Enum<PolyglotEngineOptions$CloseOnGCExceptionAction> {
    static Ignore: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static Print: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static Throw: PolyglotEngineOptions$CloseOnGCExceptionAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolyglotEngineOptions$CloseOnGCExceptionAction;
    static values(): PolyglotEngineOptions$CloseOnGCExceptionAction[];
    private constructor()
    name(): "Ignore" | "Print" | "Throw";
}