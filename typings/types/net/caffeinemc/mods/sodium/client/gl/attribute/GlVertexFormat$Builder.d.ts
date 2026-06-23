import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexAttribute } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttribute.d.ts'
import type { GlVertexFormat } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat.d.ts'
import type { VertexFormatAttribute } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/vertex/VertexFormatAttribute.d.ts'
export class GlVertexFormat$Builder extends Object {
    constructor(arg0: number)
    // private attributes: Map<VertexFormatAttribute, GlVertexAttribute>;
    // private bindings: { [key: string]: any };
    // private stride: number;
    addElement(arg0: VertexFormatAttribute, arg1: number, arg2: number): GlVertexFormat$Builder;
    // private addElement(arg0: VertexFormatAttribute, arg1: number, arg2: GlVertexAttribute): GlVertexFormat$Builder;
    build(): GlVertexFormat;
}