import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { AbstractLayout } from '../../../../../net/minecraft/client/gui/layouts/AbstractLayout.d.ts'
import type { GridLayout$ChildContainer } from '../../../../../net/minecraft/client/gui/layouts/GridLayout$ChildContainer.d.ts'
import type { GridLayout$RowHelper } from '../../../../../net/minecraft/client/gui/layouts/GridLayout$RowHelper.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class GridLayout extends AbstractLayout {
    constructor()
    constructor(x: number, y: number)
    // private children: GridLayout$ChildContainer[];
    // private columnSpacing: number;
    // private defaultCellSettings: LayoutSettings;
    // private rowSpacing: number;
    addChild<T extends LayoutElement>(child: T, row: number, column: number): T;
    addChild<T extends LayoutElement>(child: T, row: number, column: number, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addChild<T extends LayoutElement>(child: T, row: number, column: number, rows: number, columns: number): T;
    addChild<T extends LayoutElement>(child: T, row: number, column: number, rows: number, columns: number, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addChild<T extends LayoutElement>(child: T, row: number, column: number, rows: number, columns: number, cellSettings: LayoutSettings): T;
    addChild<T extends LayoutElement>(child: T, row: number, column: number, cellSettings: LayoutSettings): T;
    arrangeElements(): void;
    columnSpacing(columnSpacing: number): GridLayout;
    createRowHelper(columns: number): GridLayout$RowHelper;
    defaultCellSetting(): LayoutSettings;
    newCellSettings(): LayoutSettings;
    removeChildren(): void;
    rowSpacing(rowSpacing: number): GridLayout;
    spacing(spacing: number): GridLayout;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
}