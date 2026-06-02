import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Stitcher$Entry } from '../../../../../net/minecraft/client/renderer/texture/Stitcher$Entry.d.ts'
export class StitcherException extends RuntimeException {
    constructor(sprite: Stitcher$Entry, allSprites: E[])
    readonly allSprites: E[];
    getAllSprites(): E[];
}