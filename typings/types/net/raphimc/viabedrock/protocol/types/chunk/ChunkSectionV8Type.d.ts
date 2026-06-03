import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BedrockChunkSection } from '../../../../../../net/raphimc/viabedrock/api/chunk/section/BedrockChunkSection.d.ts'
export class ChunkSectionV8Type extends Type<BedrockChunkSection> {
    constructor()
    read(arg0: ByteBuf): BedrockChunkSection;
    write(arg0: Ops, arg1: BedrockChunkSection): void;
    write(arg0: ByteBuf, arg1: BedrockChunkSection): void;
}