import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export interface PBRTextureHolder extends Object{
    normalTexture(): AbstractTexture;
    specularTexture(): AbstractTexture;
}