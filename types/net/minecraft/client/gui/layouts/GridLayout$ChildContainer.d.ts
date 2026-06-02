import type { AbstractLayout$AbstractChildWrapper } from '../../../../../net/minecraft/client/gui/layouts/AbstractLayout$AbstractChildWrapper.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
export class GridLayout$ChildContainer extends AbstractLayout$AbstractChildWrapper {
    private constructor(widget: LayoutElement, row: number, column: number, occupiedRows: number, occupiedColumns: number, cellSettings: LayoutSettings)
    // private column: number;
    // private occupiedColumns: number;
    // private occupiedRows: number;
    // private row: number;
    getLastOccupiedColumn(): number;
    getLastOccupiedRow(): number;
}