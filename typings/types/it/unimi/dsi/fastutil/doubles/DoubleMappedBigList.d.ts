import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { FileChannel$MapMode } from '../../../../../java/nio/channels/FileChannel$MapMode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleMappedBigList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static CHUNK_SIZE: number;
    static LOG2_BITS: number;
    static LOG2_BYTES: number;
    static map(paramarg0: FileChannel): (Object | null)[];
    static map(paramarg0: FileChannel, paramarg1: ByteOrder): (Object | null)[];
    static map(paramarg0: FileChannel, paramarg1: ByteOrder, paramarg2: FileChannel$MapMode): (Object | null)[];
}