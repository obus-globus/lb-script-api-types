import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
export interface BufferBuilderExtension extends Object, VertexBufferWriter{
    canUseIntrinsics(): boolean;
    sodium$duplicateVertex(): void;
}