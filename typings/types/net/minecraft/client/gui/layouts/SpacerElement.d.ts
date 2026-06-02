import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class SpacerElement extends Object implements LayoutElement {
    static height(paramheight: number): SpacerElement;
    static width(paramwidth: number): SpacerElement;
    constructor(width: number, height: number)
    constructor(x: number, y: number, width: number, height: number)
    readonly height: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
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