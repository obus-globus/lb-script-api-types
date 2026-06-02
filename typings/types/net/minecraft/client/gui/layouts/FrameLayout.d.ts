import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { AbstractLayout } from '../../../../../net/minecraft/client/gui/layouts/AbstractLayout.d.ts'
import type { FrameLayout$ChildContainer } from '../../../../../net/minecraft/client/gui/layouts/FrameLayout$ChildContainer.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class FrameLayout extends AbstractLayout {
    static alignInDimension(parampos: number, paramlength: number, paramwidgetLength: number, paramsetWidgetPos: (param0: number) => void, paramalign: number): void;
    static alignInRectangle(paramwidget: LayoutElement, paramx: number, paramy: number, paramwidth: number, paramheight: number, paramalignX: number, paramalignY: number): void;
    static alignInRectangle(paramwidget: LayoutElement, paramrectangle: ScreenRectangle, paramalignX: number, paramalignY: number): void;
    static centerInRectangle(paramwidget: LayoutElement, paramx: number, paramy: number, paramwidth: number, paramheight: number): void;
    static centerInRectangle(paramwidget: LayoutElement, paramrectangle: ScreenRectangle): void;
    constructor()
    constructor(minWidth: number, minHeight: number)
    constructor(x: number, y: number, minWidth: number, minHeight: number)
    // private children: FrameLayout$ChildContainer[];
    // private defaultChildLayoutSettings: LayoutSettings;
    // private minHeight: number;
    // private minWidth: number;
    addChild<T extends LayoutElement>(child: T): T;
    addChild<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addChild<T extends LayoutElement>(child: T, childLayoutSettings: LayoutSettings): T;
    arrangeElements(): void;
    defaultChildLayoutSetting(): LayoutSettings;
    newChildLayoutSettings(): LayoutSettings;
    setMinDimensions(minWidth: number, minHeight: number): FrameLayout;
    setMinHeight(minHeight: number): FrameLayout;
    setMinWidth(minWidth: number): FrameLayout;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
}