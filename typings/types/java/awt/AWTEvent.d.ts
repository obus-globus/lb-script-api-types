import type { Event } from '../../java/awt/Event.d.ts'
import type { ComponentPeer } from '../../java/awt/peer/ComponentPeer.d.ts'
import type { EventObject } from '../../java/util/EventObject.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AWTEvent extends EventObject {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static COMPONENT_EVENT_MASK: number;
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
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Event)
    constructor(arg0: Object, arg1: number)
    // private bdata: number[];
    // private consumed: boolean;
    // private focusManagerIsDispatching: boolean;
    // private id: number;
    // private isPosted: boolean;
    // private isSystemGenerated: boolean;
    consume(): void;
    convertToOld(): Event;
    copyPrivateDataInto(arg0: AWTEvent): void;
    dispatched(): void;
    getID(): number;
    isConsumed(): boolean;
    // private nativeSetSource(arg0: ComponentPeer): void;
    paramString(): string;
    setSource(arg0: Object): void;
    toString(): string;
}