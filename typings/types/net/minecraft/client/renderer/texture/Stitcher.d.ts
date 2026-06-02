import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
import type { Stitcher$Holder } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Holder.d.ts'
import type { Stitcher$Region } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Region.d.ts'
import type { Stitcher$SpriteLoader } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$SpriteLoader.d.ts'
export class Stitcher<T extends Stitcher$Entry> extends Object {
    constructor(maxWidth: number, maxHeight: number, mipLevel: number, anisotropyBit: number)
    // private maxHeight: number;
    // private maxWidth: number;
    // private mipLevel: number;
    // private padding: number;
    // private storage: Stitcher$Region<T>[];
    // private storageX: number;
    // private storageY: number;
    // private texturesToBeStitched: Stitcher$Holder<T>[];
    // private addToStorage(holder: Stitcher$Holder<T>): boolean;
    // private expand(holder: Stitcher$Holder<T>): boolean;
    gatherSprites(loader: Stitcher$SpriteLoader<T>): void;
    getHeight(): number;
    getWidth(): number;
    registerSprite(entry: T): void;
    stitch(): void;
}