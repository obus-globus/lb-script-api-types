import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class Panorama extends Object {
    static PANORAMA_OVERLAY: Identifier;
    constructor()
    // private spin: number;
    extractRenderState(graphics: GuiGraphicsExtractor, width: number, height: number, shouldSpin: boolean): void;
}