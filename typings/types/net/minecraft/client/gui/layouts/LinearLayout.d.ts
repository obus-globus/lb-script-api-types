import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { GridLayout } from '../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { Layout } from '../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { LinearLayout$Orientation } from '../../../../../net/minecraft/client/gui/layouts/LinearLayout$Orientation.d.ts'
export class LinearLayout extends Object implements Layout {
    static horizontal(): LinearLayout;
    static vertical(): LinearLayout;
    constructor(x: number, y: number, orientation: LinearLayout$Orientation)
    // private nextChildIndex: number;
    // private orientation: LinearLayout$Orientation;
    // private wrapped: GridLayout;
    addChild<T extends LayoutElement>(child: T): T;
    addChild<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addChild<T extends LayoutElement>(child: T, cellSettings: LayoutSettings): T;
    arrangeElements(): void;
    defaultCellSetting(): LayoutSettings;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    newCellSettings(): LayoutSettings;
    removeChildren(): void;
    setX(x: number): void;
    setY(y: number): void;
    spacing(spacing: number): LinearLayout;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}