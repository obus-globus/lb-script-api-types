import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Undoable } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Undoable.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { Propagatable } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Propagatable.d.ts'
export interface ILits extends Object{
    belongsToPool(arg0: number): boolean;
    forgets(arg0: number): void;
    getFromPool(arg0: number): number;
    getLevel(arg0: number): number;
    getReason(arg0: number): Constr;
    getTrailPosition(arg0: number): number;
    isFalsified(arg0: number): boolean;
    isSatisfied(arg0: number): boolean;
    isUnassigned(arg0: number): boolean;
    nVars(): number;
    nextFreeVarId(arg0: boolean): number;
    realnVars(): number;
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