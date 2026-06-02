import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SignAtlasRenderTarget$Slot } from '../../../../../net/raphimc/immediatelyfast/feature/sign_text_buffering/SignAtlasRenderTarget$Slot.d.ts'
export class SignAtlasRenderTarget extends RenderTarget implements AutoCloseable {
    static ATLAS_SIZE: number;
    constructor(arg0: number)
    // private rootSlot: SignAtlasRenderTarget$Slot;
    readonly textureId: Identifier;
    bind(arg0: boolean): number;
    clear(): void;
    close(): void;
    findSlot(arg0: number, arg1: number): SignAtlasRenderTarget$Slot;
    getTextureId(): Identifier;
    unbind(arg0: number): void;
}