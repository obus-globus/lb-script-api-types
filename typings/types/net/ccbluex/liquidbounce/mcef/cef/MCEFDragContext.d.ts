import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CefDragData } from '../../../../../org/cef/callback/CefDragData.d.ts'
export class MCEFDragContext extends Object {
    constructor()
    readonly actualCursor: number;
    // private cursorOverride: number;
    readonly dragData: CefDragData;
    // private dragMask: number;
    getActualCursor(): number;
    getDragData(): CefDragData;
    getMask(): number;
    getVirtualCursor(arg0: number): number;
    getVirtualModifiers(arg0: number): number;
    isDragging(): boolean;
    startDragging(arg0: CefDragData, arg1: number): void;
    stopDragging(): void;
    updateCursor(arg0: number): boolean;
}