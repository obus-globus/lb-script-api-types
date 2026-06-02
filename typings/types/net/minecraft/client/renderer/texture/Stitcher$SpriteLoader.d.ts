import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
export interface Stitcher$SpriteLoader<T extends Stitcher$Entry> extends Object{
    load(entry: T, x: number, z: number, padding: number): void;
}