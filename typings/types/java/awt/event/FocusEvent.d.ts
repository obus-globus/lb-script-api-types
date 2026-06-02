import type { Component } from '../../../java/awt/Component.d.ts'
import type { ComponentEvent } from '../../../java/awt/event/ComponentEvent.d.ts'
import type { FocusEvent$Cause } from '../../../java/awt/event/FocusEvent$Cause.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FocusEvent extends ComponentEvent {
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
    static FOCUS_FIRST: number;
    static FOCUS_GAINED: number;
    static FOCUS_LAST: number;
    static FOCUS_LOST: number;
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
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Component, arg1: number)
    constructor(arg0: Component, arg1: number, arg2: boolean)
    constructor(arg0: Component, arg1: number, arg2: boolean, arg3: Component)
    constructor(arg0: Component, arg1: number, arg2: boolean, arg3: Component, arg4: FocusEvent$Cause)
    readonly cause: FocusEvent$Cause;
    // private opposite: Component;
    temporary: boolean;
    getCause(): FocusEvent$Cause;
    getOppositeComponent(): Component;
    isTemporary(): boolean;
    paramString(): string;
    readResolve(): Object;
}