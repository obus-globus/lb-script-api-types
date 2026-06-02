import type { DropTargetContext } from '../../../java/awt/dnd/DropTargetContext.d.ts'
import type { EventObject } from '../../../java/util/EventObject.d.ts'
export class DropTargetEvent extends EventObject {
    constructor(arg0: DropTargetContext)
    // private context: DropTargetContext;
    getDropTargetContext(): DropTargetContext;
}