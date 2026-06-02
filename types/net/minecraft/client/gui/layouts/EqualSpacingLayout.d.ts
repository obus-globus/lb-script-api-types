import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { AbstractLayout } from '../../../../../net/minecraft/client/gui/layouts/AbstractLayout.d.ts'
import type { EqualSpacingLayout$ChildContainer } from '../../../../../net/minecraft/client/gui/layouts/EqualSpacingLayout$ChildContainer.d.ts'
import type { EqualSpacingLayout$Orientation } from '../../../../../net/minecraft/client/gui/layouts/EqualSpacingLayout$Orientation.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class EqualSpacingLayout extends AbstractLayout {
    constructor(x: number, y: number, width: number, height: number, orientation: EqualSpacingLayout$Orientation)
    constructor(width: number, height: number, orientation: EqualSpacingLayout$Orientation)
    // private children: EqualSpacingLayout$ChildContainer[];
    // private defaultChildLayoutSettings: LayoutSettings;
    // private orientation: EqualSpacingLayout$Orientation;
    addChild<T extends LayoutElement>(child: T): T;
    addChild<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addChild<T extends LayoutElement>(child: T, layoutSettings: LayoutSettings): T;
    arrangeElements(): void;
    defaultChildLayoutSetting(): LayoutSettings;
    newChildLayoutSettings(): LayoutSettings;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
}