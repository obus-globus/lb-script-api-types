import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Layout } from '../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
export abstract class AbstractLayout extends Object implements Layout {
    constructor(x: number, y: number, width: number, height: number)
    height: number;
    width: number;
    readonly x: number;
    readonly y: number;
    arrangeElements(): void;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    removeChildren(): void;
    setX(x: number): void;
    setY(y: number): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}