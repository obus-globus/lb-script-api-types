import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { IcTuple } from '../../../../../../org/apache/commons/compress/harmony/unpack200/IcTuple.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { ClassConstantPool } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class IcBands extends BandSet {
    constructor(arg0: Segment)
    // private cpClass: string[];
    // private cpUTF8: string[];
    // private icAll: IcTuple[];
    // private outerClassToTuples: { [key: string]: IcTuple[] };
    // private thisClassToTuple: { [key: string]: IcTuple };
    getIcTuples(): IcTuple[];
    getRelevantIcTuples(arg0: string, arg1: ClassConstantPool): IcTuple[];
    read(arg0: InputStream): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}