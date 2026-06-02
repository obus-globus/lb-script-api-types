import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { ItemSelectable } from '../../../java/awt/ItemSelectable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ItemEvent extends AWTEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static COMPONENT_EVENT_MASK: number;
    static CONTAINER_EVENT_MASK: number;
    static DESELECTED: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_EVENT_MASK: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INVOCATION_EVENT_MASK: number;
    static ITEM_EVENT_MASK: number;
    static ITEM_FIRST: number;
    static ITEM_LAST: number;
    static ITEM_STATE_CHANGED: number;
    static KEY_EVENT_MASK: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static RESERVED_ID_MAX: number;
    static SELECTED: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: ItemSelectable, arg1: number, arg2: Object, arg3: number)
    item: Object;
    stateChange: number;
    getItem(): Object;
    getItemSelectable(): ItemSelectable;
    getStateChange(): number;
    paramString(): string;
}