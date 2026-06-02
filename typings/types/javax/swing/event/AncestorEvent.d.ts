import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { Container } from '../../../java/awt/Container.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
export class AncestorEvent extends AWTEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static ANCESTOR_ADDED: number;
    static ANCESTOR_MOVED: number;
    static ANCESTOR_REMOVED: number;
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
    constructor(arg0: JComponent, arg1: number, arg2: Container, arg3: Container)
    ancestor: Container;
    ancestorParent: Container;
    getAncestor(): Container;
    getAncestorParent(): Container;
    getComponent(): JComponent;
}