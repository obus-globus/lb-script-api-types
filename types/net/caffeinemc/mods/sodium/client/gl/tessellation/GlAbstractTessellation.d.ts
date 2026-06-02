import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { GlPrimitiveType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlPrimitiveType.d.ts'
import type { GlTessellation } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlTessellation.d.ts'
import type { TessellationBinding } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/TessellationBinding.d.ts'
export abstract class GlAbstractTessellation extends Object implements GlTessellation {
    constructor(arg0: GlPrimitiveType, arg1: TessellationBinding[])
    // private bindings: TessellationBinding[];
    readonly primitiveType: GlPrimitiveType;
    bindAttributes(arg0: CommandList): void;
    getPrimitiveType(): GlPrimitiveType;
}