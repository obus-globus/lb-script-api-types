import type { DragSourceContext } from '../../../java/awt/dnd/DragSourceContext.d.ts'
import type { DragSourceEvent } from '../../../java/awt/dnd/DragSourceEvent.d.ts'
export class DragSourceDropEvent extends DragSourceEvent {
    constructor(arg0: DragSourceContext)
    constructor(arg0: DragSourceContext, arg1: number, arg2: boolean)
    constructor(arg0: DragSourceContext, arg1: number, arg2: boolean, arg3: number, arg4: number)
    readonly dropAction: number;
    readonly dropSuccess: boolean;
    getDropAction(): number;
    getDropSuccess(): boolean;
}