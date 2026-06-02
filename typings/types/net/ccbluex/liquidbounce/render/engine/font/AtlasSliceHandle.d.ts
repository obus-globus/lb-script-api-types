import type { Point } from '../../../../../../java/awt/Point.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AtlasSlice } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/AtlasSlice.d.ts'
export class AtlasSliceHandle extends Object {
    constructor(internalSlice: AtlasSlice)
    readonly dimension: Point;
    readonly internalSlice: AtlasSlice;
    readonly pos: Point;
    readonly wasFreed: boolean;
    requireNotFreed(): void;
    setFreed(): void;
}