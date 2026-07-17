import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiRearrangeable } from '../../../../../net/ccbluex/liquidbounce/render/gui/GuiRearrangeable.d.ts'
export class GuiOverlapRearranger extends Object {
    constructor(maxIter?: number)
    // private maxIter: number;
    rearrange(elements: GuiRearrangeable[]): void;
}