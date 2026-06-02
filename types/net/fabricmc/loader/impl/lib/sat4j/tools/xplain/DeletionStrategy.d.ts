import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ISolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { MinimizationStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/xplain/MinimizationStrategy.d.ts'
export class DeletionStrategy extends Object implements MinimizationStrategy {
    constructor()
    // private computationCanceled: boolean;
    explain(arg0: ISolver, arg1: { [key: number]: Object | null }, arg2: IVecInt): IVecInt;
    toString(): string;
}