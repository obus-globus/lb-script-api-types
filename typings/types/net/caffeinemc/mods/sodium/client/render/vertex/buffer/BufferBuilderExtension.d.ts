import type { VertexFormat } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
import type { MemoryStack } from '../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
export interface BufferBuilderExtension extends Object, VertexBufferWriter{
    canUseIntrinsics(): boolean;
    push(arg0: MemoryStack, arg1: number, arg2: number, arg3: VertexFormat): void;
    sodium$duplicateVertex(): void;
}