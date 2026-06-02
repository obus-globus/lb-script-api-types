import type { DragSourceContext } from '../../../java/awt/dnd/DragSourceContext.d.ts'
import type { DragSourceEvent } from '../../../java/awt/dnd/DragSourceEvent.d.ts'
export class DragSourceDragEvent extends DragSourceEvent {
    constructor(arg0: DragSourceContext, arg1: number, arg2: number, arg3: number)
    constructor(arg0: DragSourceContext, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    readonly dropAction: number;
    readonly gestureModifiers: number;
    // private invalidModifiers: boolean;
    readonly targetActions: number;
    getDropAction(): number;
    getGestureModifiers(): number;
    getGestureModifiersEx(): number;
    getTargetActions(): number;
    getUserAction(): number;
    // private setNewModifiers(): void;
    // private setOldModifiers(): void;
}