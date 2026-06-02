import type { Transparency } from '../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MipmapStrategy } from '../../../../../net/minecraft/client/renderer/texture/MipmapStrategy.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class MipmapGenerator extends Object {
    static generateMipLevels(paramname: Identifier, paramcurrentMips: (Object | null)[], paramnewMipLevel: number, parammipmapStrategy: MipmapStrategy, paramalphaCutoffBias: number, paramtransparency: Transparency): (Object | null)[];
    private constructor()
}