import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Batchifier extends Serializable, Object{
    batchify(arg0: (Object | null)[][]): (Object | null)[];
    split(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[][];
    unbatchify(arg0: (Object | null)[]): (Object | null)[][];
}