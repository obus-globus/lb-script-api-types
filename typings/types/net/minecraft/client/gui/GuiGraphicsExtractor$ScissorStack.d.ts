import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class GuiGraphicsExtractor$ScissorStack extends Object {
    private constructor(screenSize: ScreenRectangle)
    // private screenSize: ScreenRectangle;
    // private stack: ScreenRectangle[];
    containsPoint(x: number, y: number): boolean;
    peek(): ScreenRectangle;
    pop(): void;
    push(rectangle: ScreenRectangle): void;
}