import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { GlPrimitiveType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlPrimitiveType.d.ts'
export interface GlTessellation extends Object{
    bind(arg0: CommandList): void;
    delete(arg0: CommandList): void;
    getPrimitiveType(): GlPrimitiveType;
    unbind(arg0: CommandList): void;
}