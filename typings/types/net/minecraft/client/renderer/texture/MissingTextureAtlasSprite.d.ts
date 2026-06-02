import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class MissingTextureAtlasSprite extends Object {
    static create(): SpriteContents;
    static generateMissingImage(): NativeImage;
    static generateMissingImage(paramwidth: number, paramheight: number): NativeImage;
    static getLocation(): Identifier;
    constructor()
}