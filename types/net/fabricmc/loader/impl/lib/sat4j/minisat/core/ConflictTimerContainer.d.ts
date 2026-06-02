import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
export class ConflictTimerContainer extends Object implements Serializable, ConflictTimer {
    constructor()
    // private timers: IVec<ConflictTimer>;
    add(arg0: ConflictTimer): ConflictTimerContainer;
    newConflict(): void;
    remove(arg0: ConflictTimer): ConflictTimerContainer;
    reset(): void;
}