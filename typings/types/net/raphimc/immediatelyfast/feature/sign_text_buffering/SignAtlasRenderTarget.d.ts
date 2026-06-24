import type { TextureTarget } from '../../../../../com/mojang/blaze3d/pipeline/TextureTarget.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SignAtlasRenderTarget$Slot } from '../../../../../net/raphimc/immediatelyfast/feature/sign_text_buffering/SignAtlasRenderTarget$Slot.d.ts'
export class SignAtlasRenderTarget extends TextureTarget implements AutoCloseable {
    static ATLAS_SIZE: number;
    constructor(arg0: number)
    readonly id: number;
    // private rootSlot: SignAtlasRenderTarget$Slot;
    readonly textureId: Identifier;
    clear(): void;
    close(): void;
    findSlot(arg0: number, arg1: number): SignAtlasRenderTarget$Slot;
    getId(): number;
    getTextureId(): Identifier;
}