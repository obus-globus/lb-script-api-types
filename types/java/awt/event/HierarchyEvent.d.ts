import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { Container } from '../../../java/awt/Container.d.ts'
export class HierarchyEvent extends AWTEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static ANCESTOR_MOVED: number;
    static ANCESTOR_RESIZED: number;
    static COMPONENT_EVENT_MASK: number;
    static CONTAINER_EVENT_MASK: number;
    static DISPLAYABILITY_CHANGED: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_CHANGED: number;
    static HIERARCHY_EVENT_MASK: number;
    static HIERARCHY_FIRST: number;
    static HIERARCHY_LAST: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INVOCATION_EVENT_MASK: number;
    static ITEM_EVENT_MASK: number;
    static KEY_EVENT_MASK: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static PAINT_EVENT_MASK: number;
    static PARENT_CHANGED: number;
    static RESERVED_ID_MAX: number;
    static SHOWING_CHANGED: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    constructor(arg0: Component, arg1: number, arg2: Component, arg3: Container)
    constructor(arg0: Component, arg1: number, arg2: Component, arg3: Container, arg4: number)
    changeFlags: number;
    changed: Component;
    changedParent: Container;
    getChangeFlags(): number;
    getChanged(): Component;
    getChangedParent(): Container;
    getComponent(): Component;
    paramString(): string;
}