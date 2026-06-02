import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OptimizedRuntimeOptions$ExceptionAction extends Enum<OptimizedRuntimeOptions$ExceptionAction> {
    static Diagnose: OptimizedRuntimeOptions$ExceptionAction;
    static ExitVM: OptimizedRuntimeOptions$ExceptionAction;
    static Print: OptimizedRuntimeOptions$ExceptionAction;
    static Silent: OptimizedRuntimeOptions$ExceptionAction;
    static Throw: OptimizedRuntimeOptions$ExceptionAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OptimizedRuntimeOptions$ExceptionAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "Silent" | "Print" | "Throw" | "Diagnose" | "ExitVM";
}