import type { AbstractFutureState$AtomicHelper } from '../../../../../com/google/common/util/concurrent/AbstractFutureState$AtomicHelper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractFutureState$VarHandleAtomicHelperMaker extends Enum<AbstractFutureState$VarHandleAtomicHelperMaker> {
    static INSTANCE: AbstractFutureState$VarHandleAtomicHelperMaker;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbstractFutureState$VarHandleAtomicHelperMaker;
    static values(): AbstractFutureState$VarHandleAtomicHelperMaker[];
    constructor(arg2: any)
    tryMakeVarHandleAtomicHelper(): AbstractFutureState$AtomicHelper;
    name(): "INSTANCE";
}