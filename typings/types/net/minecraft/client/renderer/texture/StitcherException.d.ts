import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
export class StitcherException extends RuntimeException {
    constructor(sprite: Stitcher$Entry, allSprites: Stitcher$Entry[])
    readonly allSprites: Stitcher$Entry[];
    getAllSprites(): Stitcher$Entry[];
}