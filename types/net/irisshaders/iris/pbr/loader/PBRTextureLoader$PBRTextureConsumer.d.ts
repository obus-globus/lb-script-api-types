import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export interface PBRTextureLoader$PBRTextureConsumer extends Object{
    acceptNormalTexture(arg0: AbstractTexture): void;
    acceptSpecularTexture(arg0: AbstractTexture): void;
}