import type { Serializable } from '../../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Undoable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Undoable.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { Propagatable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Propagatable.d.ts'
export class Lits extends Object implements Serializable, ILits {
    static toString(paramarg0: number): string;
    static toStringX(paramarg0: number): string;
    constructor()
    // private falsified: boolean[];
    readonly level: number[];
    // private maxvarid: number;
    // private pool: boolean[];
    // private realnVars: number;
    readonly reason: Constr[];
    readonly trailPosition: number[];
    // private undos: IVec<Undoable>[];
    // private watches: IVec<Propagatable>[];
    belongsToPool(arg0: number): boolean;
    ensurePool(arg0: number): void;
    forgets(arg0: number): void;
    getFromPool(arg0: number): number;
    getLevel(arg0: number): number;
    getReason(arg0: number): Constr;
    getTrailPosition(arg0: number): number;
    init(arg0: number): void;
    isFalsified(arg0: number): boolean;
    isSatisfied(arg0: number): boolean;
    isUnassigned(arg0: number): boolean;
    nVars(): number;
    nextFreeVarId(arg0: boolean): number;
    realnVars(): number;
    reset(arg0: number): void;
    resetPool(): void;
    satisfies(arg0: number): void;
    setLevel(arg0: number, arg1: number): void;
    setReason(arg0: number, arg1: Constr): void;
    setTrailPosition(arg0: number, arg1: number): void;
    unassign(arg0: number): void;
    undos(arg0: number): IVec<Undoable>;
    valueToString(arg0: number): string;
    watch(arg0: number, arg1: Propagatable): void;
    watches(arg0: number): IVec<Propagatable>;
}