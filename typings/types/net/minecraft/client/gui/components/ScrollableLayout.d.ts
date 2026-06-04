import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { ScrollableLayout$Container } from '../../../../../net/minecraft/client/gui/components/ScrollableLayout$Container.d.ts'
import type { ScrollableLayout$ReserveStrategy } from '../../../../../net/minecraft/client/gui/components/ScrollableLayout$ReserveStrategy.d.ts'
import type { Layout } from '../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
export class ScrollableLayout extends Object implements Layout {
    constructor(minecraft: Minecraft, content: Layout, maxHeight: number)
    // private container: ScrollableLayout$Container;
    // private content: Layout;
    readonly maxHeight: number;
    readonly minHeight: number;
    readonly minWidth: number;
    // private reserveStrategy: ScrollableLayout$ReserveStrategy;
    // private scrollbarSpacing: number;
    arrangeElements(): void;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setMaxHeight(maxHeight: number): void;
    setMinHeight(minHeight: number): void;
    setMinWidth(minWidth: number): void;
    setX(x: number): void;
    setY(y: number): void;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}