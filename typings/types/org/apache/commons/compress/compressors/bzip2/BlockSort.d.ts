import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BZip2CompressorOutputStream$Data } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BZip2CompressorOutputStream$Data.d.ts'
export class BlockSort extends Object {
    constructor(arg0: BZip2CompressorOutputStream$Data)
    // private eclass: number[];
    // private firstAttempt: boolean;
    // private ftab: number[];
    // private mainSort_bigDone: boolean[];
    // private mainSort_copy: number[];
    // private mainSort_runningOrder: number[];
    // private quadrant: string[];
    // private stack_dd: number[];
    // private stack_hh: number[];
    // private stack_ll: number[];
    // private workDone: number;
    // private workLimit: number;
    blockSort(arg0: BZip2CompressorOutputStream$Data, arg1: number): void;
    // private fallbackQSort3(arg0: number[], arg1: number[], arg2: number, arg3: number): void;
    // private fallbackSimpleSort(arg0: number[], arg1: number[], arg2: number, arg3: number): void;
    fallbackSort(arg0: number[], arg1: number[], arg2: number): void;
    fallbackSort(arg0: BZip2CompressorOutputStream$Data, arg1: number): void;
    // private fpop(arg0: number): number[];
    // private fpush(arg0: number, arg1: number, arg2: number): void;
    // private fswap(arg0: number[], arg1: number, arg2: number): void;
    // private fvswap(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    // private getEclass(): number[];
    // private mainQSort3(arg0: BZip2CompressorOutputStream$Data, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private mainSimpleSort(arg0: BZip2CompressorOutputStream$Data, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    mainSort(arg0: BZip2CompressorOutputStream$Data, arg1: number): void;
}