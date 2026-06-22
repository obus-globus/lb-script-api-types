import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
export abstract class Overlay extends Object implements Renderable {
    constructor()
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    isPauseScreen(): boolean;
    tick(): void;
}