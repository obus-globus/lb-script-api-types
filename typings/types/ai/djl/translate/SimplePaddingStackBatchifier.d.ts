import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SimplePaddingStackBatchifier extends Object implements Batchifier {
    static STACK: Batchifier;
    static fromString(paramarg0: string): Batchifier;
    constructor()
    constructor(arg0: number)
    // private padding: number;
    batchify(arg0: (Object | null)[][]): (Object | null)[];
    split(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[][];
    unbatchify(arg0: (Object | null)[]): (Object | null)[][];
}