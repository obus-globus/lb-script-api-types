import type { Chunk } from '../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BlockRewriter$ChunkTypeSupplier extends Object{
    supply(arg0: number, arg1: number, arg2: number): Type<Chunk>;
}