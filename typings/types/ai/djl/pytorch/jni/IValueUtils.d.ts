import type { PtSymbolBlock } from '../../../../ai/djl/pytorch/engine/PtSymbolBlock.d.ts'
import type { IValue } from '../../../../ai/djl/pytorch/jni/IValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IValueUtils extends Object {
    static forward(paramarg0: PtSymbolBlock, paramarg1: (Object | null)[], paramarg2: boolean): (Object | null)[];
    static forward(paramarg0: PtSymbolBlock, paramarg1: (Object | null)[]): IValue;
    static runMethod(paramarg0: PtSymbolBlock, paramarg1: string, paramarg2: (Object | null)[]): IValue;
    private constructor()
}