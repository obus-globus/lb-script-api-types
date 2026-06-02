import type { VertexFormat } from '../../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { VertexSerializerFactory$Bytecode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/vertex/serializers/generated/VertexSerializerFactory$Bytecode.d.ts'
export class VertexSerializerFactory extends Object {
    static define(paramarg0: VertexSerializerFactory$Bytecode): Class<Object>;
    static generate(paramarg0: VertexFormat, paramarg1: VertexFormat, paramarg2: string): VertexSerializerFactory$Bytecode;
    constructor()
}