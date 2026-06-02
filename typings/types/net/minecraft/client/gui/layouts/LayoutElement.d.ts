import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export interface LayoutElement extends Object{
    getHeight(): number;
    getRectangle(): ScreenRectangle;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setPosition(x: number, y: number): void;
    setX(x: number): void;
    setY(y: number): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}