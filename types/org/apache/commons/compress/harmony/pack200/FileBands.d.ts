import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Archive$PackingFile } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$PackingFile.d.ts'
import type { Archive$SegmentUnit } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$SegmentUnit.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { PackingOptions } from '../../../../../../org/apache/commons/compress/harmony/pack200/PackingOptions.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
export class FileBands extends BandSet {
    constructor(arg0: CpBands, arg1: SegmentHeader, arg2: PackingOptions, arg3: Archive$SegmentUnit, arg4: number)
    // private cpBands: CpBands;
    // private fileList: Archive$PackingFile[];
    // private fileName: CPUTF8[];
    // private file_bits: number[][];
    // private file_modtime: number[];
    // private file_name: number[];
    // private file_options: number[];
    // private file_size: number[];
    // private options: PackingOptions;
    finaliseBands(): void;
    // private flatten(arg0: number[][]): number[];
    pack(arg0: OutputStream): void;
}