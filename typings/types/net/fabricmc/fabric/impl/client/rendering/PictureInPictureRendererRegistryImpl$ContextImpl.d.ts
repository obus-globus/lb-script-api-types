import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
export class PictureInPictureRendererRegistryImpl$ContextImpl extends Record implements PictureInPictureRendererRegistry$Context {
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    minecraft(): Minecraft;
    toString(): string;
}