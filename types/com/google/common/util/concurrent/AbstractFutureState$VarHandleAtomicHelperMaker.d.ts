import type { AbstractFutureState$AtomicHelper } from '../../../../../com/google/common/util/concurrent/AbstractFutureState$AtomicHelper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractFutureState$VarHandleAtomicHelperMaker extends Enum<AbstractFutureState$VarHandleAtomicHelperMaker> {
    static INSTANCE: AbstractFutureState$VarHandleAtomicHelperMaker;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AbstractFutureState$VarHandleAtomicHelperMaker;
    static values(): (Object | null)[];
    private constructor()
    tryMakeVarHandleAtomicHelper(): AbstractFutureState$AtomicHelper;
    name(): "INSTANCE";
}