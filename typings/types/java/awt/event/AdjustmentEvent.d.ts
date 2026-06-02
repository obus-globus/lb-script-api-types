import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { Adjustable } from '../../../java/awt/Adjustable.d.ts'
export class AdjustmentEvent extends AWTEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static ADJUSTMENT_FIRST: number;
    static ADJUSTMENT_LAST: number;
    static ADJUSTMENT_VALUE_CHANGED: number;
    static BLOCK_DECREMENT: number;
    static BLOCK_INCREMENT: number;
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
    static TRACK: number;
    static UNIT_DECREMENT: number;
    static UNIT_INCREMENT: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Adjustable, arg1: number, arg2: number, arg3: number)
    constructor(arg0: Adjustable, arg1: number, arg2: number, arg3: number, arg4: boolean)
    adjustable: Adjustable;
    adjustmentType: number;
    // private isAdjusting: boolean;
    value: number;
    getAdjustable(): Adjustable;
    getAdjustmentType(): number;
    getValue(): number;
    getValueIsAdjusting(): boolean;
    paramString(): string;
}