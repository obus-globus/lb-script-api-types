import type { GlTexture } from '../../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { GlTextureView } from '../../../../../com/mojang/blaze3d/opengl/GlTextureView.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class MCEFDirectTexture extends AbstractTexture {
    constructor()
    close(): void;
    getTexture(): GlTexture;
    getTextureSetup(): TextureSetup;
    getTextureView(): GlTextureView;
    setDirectTextureId(arg0: number, arg1: number, arg2: number): void;
    // private setDirectTextureId(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    setOwnedDirectTextureId(arg0: number, arg1: number, arg2: number): void;
}