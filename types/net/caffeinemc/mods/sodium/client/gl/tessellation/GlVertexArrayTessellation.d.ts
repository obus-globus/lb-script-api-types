import type { GlVertexArray } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/array/GlVertexArray.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { GlAbstractTessellation } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlAbstractTessellation.d.ts'
import type { GlPrimitiveType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlPrimitiveType.d.ts'
import type { TessellationBinding } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/TessellationBinding.d.ts'
export class GlVertexArrayTessellation extends GlAbstractTessellation {
    constructor(arg0: GlVertexArray, arg1: GlPrimitiveType, arg2: TessellationBinding[])
    // private array: GlVertexArray;
    bind(arg0: CommandList): void;
    delete(arg0: CommandList): void;
    init(arg0: CommandList): void;
    unbind(arg0: CommandList): void;
}