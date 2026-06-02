import type { DropTargetDragEvent } from '../../../java/awt/dnd/DropTargetDragEvent.d.ts'
import type { DropTargetDropEvent } from '../../../java/awt/dnd/DropTargetDropEvent.d.ts'
import type { DropTargetEvent } from '../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { DropTargetListener } from '../../../java/awt/dnd/DropTargetListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser_N } from '../../../org/cef/browser/CefBrowser_N.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
export class CefDropTargetListener extends Object implements DropTargetListener {
    constructor(arg0: CefBrowser_N)
    // private acceptOperations_: number;
    // private browser_: CefBrowser_N;
    // private dragData_: CefDragData;
    // private dragModifiers_: number;
    // private dragOperations_: number;
    // private AssertDragData(): void;
    // private ClearDragData(): void;
    // private CreateDragData(arg0: DropTargetDragEvent): void;
    dragEnter(arg0: DropTargetDragEvent): void;
    dragExit(arg0: DropTargetEvent): void;
    dragOver(arg0: DropTargetDragEvent): void;
    drop(arg0: DropTargetDropEvent): void;
    dropActionChanged(arg0: DropTargetDragEvent): void;
}