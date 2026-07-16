import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Transparency } from '../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MipmapStrategy } from '../../../../../net/minecraft/client/renderer/texture/MipmapStrategy.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class MipmapGenerator extends Object {
    static generateMipLevels(paramname: Identifier, paramcurrentMips: NativeImage[], paramnewMipLevel: number, parammipmapStrategy: MipmapStrategy, paramalphaCutoffBias: number, paramtransparency: Transparency): NativeImage[];
    private constructor()
}