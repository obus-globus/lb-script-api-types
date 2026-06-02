import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexAttribute } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttribute.d.ts'
import type { GlVertexAttributeBinding } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttributeBinding.d.ts'
import type { GlVertexFormat$Builder } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat$Builder.d.ts'
import type { VertexFormatAttribute } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/vertex/VertexFormatAttribute.d.ts'
export class GlVertexFormat extends Object {
    static builder(paramarg0: number): GlVertexFormat$Builder;
    constructor(arg0: Map<VertexFormatAttribute, GlVertexAttribute>, arg1: GlVertexAttributeBinding[], arg2: number)
    // private attributesKeyed: Map<VertexFormatAttribute, GlVertexAttribute>;
    // private bindings: GlVertexAttributeBinding[];
    readonly stride: number;
    getAttribute(arg0: VertexFormatAttribute): GlVertexAttribute;
    getShaderBindings(): GlVertexAttributeBinding[];
    getStride(): number;
    toString(): string;
}