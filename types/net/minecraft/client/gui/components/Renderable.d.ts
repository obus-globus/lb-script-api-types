import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface Renderable extends Object{
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
}