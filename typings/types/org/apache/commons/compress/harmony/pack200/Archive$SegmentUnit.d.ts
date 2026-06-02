import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Archive$PackingFile } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$PackingFile.d.ts'
import type { Pack200ClassReader } from '../../../../../../org/apache/commons/compress/harmony/pack200/Pack200ClassReader.d.ts'
export class Archive$SegmentUnit extends Object {
    constructor(arg0: Pack200ClassReader[], arg1: Archive$PackingFile[])
    readonly byteAmount: number;
    readonly classList: Pack200ClassReader[];
    readonly fileList: Archive$PackingFile[];
    readonly packedByteAmount: number;
    addPackedByteAmount(arg0: number): void;
    classListSize(): number;
    fileListSize(): number;
    getByteAmount(): number;
    getClassList(): Pack200ClassReader[];
    getFileList(): Archive$PackingFile[];
    getPackedByteAmount(): number;
}