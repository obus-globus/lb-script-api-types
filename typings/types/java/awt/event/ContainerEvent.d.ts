import type { Component } from '../../../java/awt/Component.d.ts'
import type { Container } from '../../../java/awt/Container.d.ts'
import type { ComponentEvent } from '../../../java/awt/event/ComponentEvent.d.ts'
export class ContainerEvent extends ComponentEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static COMPONENT_ADDED: number;
    static COMPONENT_EVENT_MASK: number;
    static COMPONENT_FIRST: number;
    static COMPONENT_HIDDEN: number;
    static COMPONENT_LAST: number;
    static COMPONENT_MOVED: number;
    static COMPONENT_REMOVED: number;
    static COMPONENT_RESIZED: number;
    static COMPONENT_SHOWN: number;
    static CONTAINER_EVENT_MASK: number;
    static CONTAINER_FIRST: number;
    static CONTAINER_LAST: number;
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
    constructor(arg0: Component, arg1: number, arg2: Component)
    child: Component;
    getChild(): Component;
    getContainer(): Container;
    paramString(): string;
}