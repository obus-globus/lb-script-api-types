import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { ActiveEvent } from '../../../java/awt/ActiveEvent.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class InvocationEvent extends AWTEvent implements ActiveEvent {
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
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static RESERVED_ID_MAX: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Object, arg1: () => void)
    constructor(arg0: Object, arg1: () => void, arg2: () => void, arg3: boolean)
    constructor(arg0: Object, arg1: () => void, arg2: Object, arg3: boolean)
    private constructor(arg0: Object, arg1: number, arg2: () => void, arg3: Object, arg4: () => void, arg5: boolean)
    constructor(arg0: Object, arg1: number, arg2: () => void, arg3: Object, arg4: boolean)
    // private catchExceptions: boolean;
    readonly dispatched: boolean;
    readonly exception: Exception;
    // private listener: () => void;
    // private notifier: Object;
    // private runnable: () => void;
    readonly throwable: Throwable;
    readonly when: number;
    dispatch(): void;
    // private finishedDispatching(arg0: boolean): void;
    getException(): Exception;
    getThrowable(): Throwable;
    getWhen(): number;
    isDispatched(): boolean;
    paramString(): string;
}