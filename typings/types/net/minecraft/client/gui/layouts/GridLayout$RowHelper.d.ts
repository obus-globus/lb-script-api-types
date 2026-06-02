import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GridLayout } from '../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class GridLayout$RowHelper extends Object {
    private constructor(null_: GridLayout$RowHelper, columns: number)
    // private columns: number;
    // private index: number;
    addChild<T extends LayoutElement>(widget: T): T;
    addChild<T extends LayoutElement>(widget: T, columnWidth: number): T;
    addChild<T extends LayoutElement>(widget: T, columnWidth: number, layoutSettings: LayoutSettings): T;
    addChild<T extends LayoutElement>(widget: T, layoutSettings: LayoutSettings): T;
    defaultCellSetting(): LayoutSettings;
    getGrid(): GridLayout;
    newCellSettings(): LayoutSettings;
}