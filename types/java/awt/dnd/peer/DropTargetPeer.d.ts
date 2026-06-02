import type { DropTarget } from '../../../../java/awt/dnd/DropTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DropTargetPeer extends Object{
    addDropTarget(arg0: DropTarget): void;
    removeDropTarget(arg0: DropTarget): void;
}