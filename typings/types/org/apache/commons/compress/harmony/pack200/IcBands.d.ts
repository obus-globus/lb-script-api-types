import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { IcBands$IcTuple } from '../../../../../../org/apache/commons/compress/harmony/pack200/IcBands$IcTuple.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
export class IcBands extends BandSet {
    constructor(arg0: SegmentHeader, arg1: CpBands, arg2: number)
    // private bit16Count: number;
    // private cpBands: CpBands;
    // private innerClasses: IcBands$IcTuple[];
    // private outerToInner: JavaMap<string, IcBands$IcTuple[]>;
    addInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    // private addToMap(arg0: string, arg1: IcBands$IcTuple): void;
    finaliseBands(): void;
    getIcTuple(arg0: CPClass): IcBands$IcTuple;
    getInnerClassesForOuter(arg0: string): IcBands$IcTuple[];
    // private getOuter(arg0: string): string;
    // private namesArePredictable(arg0: string, arg1: string, arg2: string): boolean;
    pack(arg0: OutputStream): void;
}