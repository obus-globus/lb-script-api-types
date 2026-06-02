import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { Cleaner } from '../../../../io/netty/util/internal/Cleaner.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CleanerJava24Linker extends Object implements Cleaner {
    constructor()
    allocate(arg0: number): CleanableDirectBuffer;
    freeDirectBuffer(arg0: ByteBuffer): void;
}