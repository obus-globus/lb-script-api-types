import type { InvocationEvent } from '../../java/awt/event/InvocationEvent.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PeerEvent extends InvocationEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static COMPONENT_EVENT_MASK: number;
    static CONTAINER_EVENT_MASK: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_EVENT_MASK: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INVOCATION_DEFAULT: number;
    static INVOCATION_EVENT_MASK: number;
    static INVOCATION_FIRST: number;
    static INVOCATION_LAST: number;
    static ITEM_EVENT_MASK: number;
    static KEY_EVENT_MASK: number;
    static LOW_PRIORITY_EVENT: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static PRIORITY_EVENT: number;
    static RESERVED_ID_MAX: number;
    static TEXT_EVENT_MASK: number;
    static ULTIMATE_PRIORITY_EVENT: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Object, arg1: () => void, arg2: Object, arg3: boolean, arg4: number)
    constructor(arg0: Object, arg1: () => void, arg2: number)
    readonly flags: number;
    coalesceEvents(arg0: PeerEvent): PeerEvent;
    getFlags(): number;
}