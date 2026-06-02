import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
import type { Stitcher$Holder } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Holder.d.ts'
import type { Stitcher$SpriteLoader } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$SpriteLoader.d.ts'
export class Stitcher$Region<T extends Stitcher$Entry> extends Object {
    constructor(originX: number, originY: number, width: number, height: number)
    // private height: number;
    // private holder: Stitcher$Holder<T>;
    // private originX: number;
    // private originY: number;
    // private subSlots: Stitcher$Region<T>[];
    // private width: number;
    add(holder: Stitcher$Holder<T>): boolean;
    getX(): number;
    getY(): number;
    toString(): string;
    walk(output: Stitcher$SpriteLoader<T>, padding: number): void;
}