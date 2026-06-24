import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ExtendingBufferBuilder extends Object{
    iris$beginWithoutExtending(arg0: PrimitiveTopology, arg1: VertexFormat): void;
}