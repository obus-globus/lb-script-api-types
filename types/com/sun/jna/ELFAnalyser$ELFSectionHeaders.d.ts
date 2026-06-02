import type { ELFAnalyser$ELFSectionHeaderEntry } from '../../../com/sun/jna/ELFAnalyser$ELFSectionHeaderEntry.d.ts'
import type { RandomAccessFile } from '../../../java/io/RandomAccessFile.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ELFAnalyser$ELFSectionHeaders extends Object {
    constructor(arg0: boolean, arg1: boolean, arg2: ByteBuffer, arg3: RandomAccessFile)
    readonly entries: ELFAnalyser$ELFSectionHeaderEntry[];
    getEntries(): ELFAnalyser$ELFSectionHeaderEntry[];
}