import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface ClientTooltipComponent extends Object{
    extractImage(font: Font, x: number, y: number, w: number, h: number, graphics: GuiGraphicsExtractor): void;
    extractText(graphics: GuiGraphicsExtractor, font: Font, x: number, y: number): void;
    getHeight(font: Font): number;
    getWidth(font: Font): number;
    showTooltipWithItemInHand(): boolean;
}