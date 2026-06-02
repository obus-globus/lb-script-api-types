import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export class Pair extends Object implements Serializable {
    constructor()
    readonly backtrackLevel: number;
    readonly reason: Constr;
    getBacktrackLevel(): number;
    getReason(): Constr;
    setBacktrackLevel(arg0: number): void;
    setReason(arg0: Constr): void;
}