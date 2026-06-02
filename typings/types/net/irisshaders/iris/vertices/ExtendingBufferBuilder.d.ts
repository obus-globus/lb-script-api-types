import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ExtendingBufferBuilder extends Object{
    iris$beginWithoutExtending(arg0: VertexFormat$Mode, arg1: VertexFormat): void;
}