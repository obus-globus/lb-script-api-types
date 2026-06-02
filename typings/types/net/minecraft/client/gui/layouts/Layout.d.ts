import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export interface Layout extends Object, LayoutElement{
    arrangeElements(): void;
    getRectangle(): ScreenRectangle;
    setPosition(x: number, y: number): void;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}