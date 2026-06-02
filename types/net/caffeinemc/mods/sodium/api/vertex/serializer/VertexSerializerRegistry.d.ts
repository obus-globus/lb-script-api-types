import type { VertexFormat } from '../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VertexSerializer } from '../../../../../../../net/caffeinemc/mods/sodium/api/vertex/serializer/VertexSerializer.d.ts'
export interface VertexSerializerRegistry extends Object{
    get(arg0: VertexFormat, arg1: VertexFormat): VertexSerializer;
    registerSerializer(arg0: VertexFormat, arg1: VertexFormat, arg2: VertexSerializer): void;
}