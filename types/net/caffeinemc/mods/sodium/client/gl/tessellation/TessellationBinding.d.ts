import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexAttributeBinding } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttributeBinding.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferTarget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferTarget.d.ts'
export class TessellationBinding extends Record {
    static forElementBuffer(paramarg0: GlBuffer): TessellationBinding;
    static forVertexBuffer(paramarg0: GlBuffer, paramarg1: (Object | null)[]): TessellationBinding;
    // private attributeBindings: GlVertexAttributeBinding[];
    // private buffer: GlBuffer;
    // private target: GlBufferTarget;
    attributeBindings(): GlVertexAttributeBinding[];
    buffer(): GlBuffer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    target(): GlBufferTarget;
    toString(): string;
}