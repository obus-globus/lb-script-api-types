import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { BitArrayVersion } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArrayVersion.d.ts'
export interface BitArray extends Object, Cloneable{
    protected clone(): Object;
    clone(): BitArray;
    get(arg0: number): number;
    getVersion(): BitArrayVersion;
    getWords(): number[];
    set(arg0: number, arg1: number): void;
    size(): number;
}