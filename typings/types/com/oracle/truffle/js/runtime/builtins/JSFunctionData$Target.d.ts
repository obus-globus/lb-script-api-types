import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { AtomicReferenceFieldUpdater } from '../../../../../../java/util/concurrent/atomic/AtomicReferenceFieldUpdater.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSFunctionData$Target extends Enum<JSFunctionData$Target> {
    static Call: JSFunctionData$Target;
    static Construct: JSFunctionData$Target;
    static ConstructNewTarget: JSFunctionData$Target;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSFunctionData$Target;
    static values(): (Object | null)[];
    private constructor(updater: AtomicReferenceFieldUpdater<JSFunctionData, CallTarget>)
    // private updater: AtomicReferenceFieldUpdater<JSFunctionData, CallTarget>;
    getUpdater(): AtomicReferenceFieldUpdater<JSFunctionData, CallTarget>;
    name(): "Call" | "Construct" | "ConstructNewTarget";
}