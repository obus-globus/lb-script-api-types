import type { Window } from '../../../java/awt/Window.d.ts'
import type { ComponentEvent } from '../../../java/awt/event/ComponentEvent.d.ts'
export class WindowEvent extends ComponentEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static COMPONENT_EVENT_MASK: number;
    static COMPONENT_FIRST: number;
    static COMPONENT_HIDDEN: number;
    static COMPONENT_LAST: number;
    static COMPONENT_MOVED: number;
    static COMPONENT_RESIZED: number;
    static COMPONENT_SHOWN: number;
    static CONTAINER_EVENT_MASK: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_EVENT_MASK: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INVOCATION_EVENT_MASK: number;
    static ITEM_EVENT_MASK: number;
    static KEY_EVENT_MASK: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static RESERVED_ID_MAX: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_ACTIVATED: number;
    static WINDOW_CLOSED: number;
    static WINDOW_CLOSING: number;
    static WINDOW_DEACTIVATED: number;
    static WINDOW_DEICONIFIED: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FIRST: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_GAINED_FOCUS: number;
    static WINDOW_ICONIFIED: number;
    static WINDOW_LAST: number;
    static WINDOW_LOST_FOCUS: number;
    static WINDOW_OPENED: number;
    static WINDOW_STATE_CHANGED: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Window, arg1: number)
    constructor(arg0: Window, arg1: number, arg2: Window)
    constructor(arg0: Window, arg1: number, arg2: Window, arg3: number, arg4: number)
    constructor(arg0: Window, arg1: number, arg2: number, arg3: number)
    newState: number;
    oldState: number;
    // private opposite: Window;
    getNewState(): number;
    getOldState(): number;
    getOppositeWindow(): Window;
    getWindow(): Window;
    paramString(): string;
}