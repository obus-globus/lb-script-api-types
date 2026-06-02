import type { Component } from '../../../java/awt/Component.d.ts'
import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { MenuElement } from '../../../javax/swing/MenuElement.d.ts'
import type { MenuSelectionManager } from '../../../javax/swing/MenuSelectionManager.d.ts'
export class MenuDragMouseEvent extends MouseEvent {
    static ACTION_EVENT_MASK: number;
    static ADJUSTMENT_EVENT_MASK: number;
    static ALT_DOWN_MASK: number;
    static ALT_GRAPH_DOWN_MASK: number;
    static ALT_GRAPH_MASK: number;
    static ALT_MASK: number;
    static BUTTON1: number;
    static BUTTON1_DOWN_MASK: number;
    static BUTTON1_MASK: number;
    static BUTTON2: number;
    static BUTTON2_DOWN_MASK: number;
    static BUTTON2_MASK: number;
    static BUTTON3: number;
    static BUTTON3_DOWN_MASK: number;
    static BUTTON3_MASK: number;
    static COMPONENT_EVENT_MASK: number;
    static COMPONENT_FIRST: number;
    static COMPONENT_HIDDEN: number;
    static COMPONENT_LAST: number;
    static COMPONENT_MOVED: number;
    static COMPONENT_RESIZED: number;
    static COMPONENT_SHOWN: number;
    static CONTAINER_EVENT_MASK: number;
    static CTRL_DOWN_MASK: number;
    static CTRL_MASK: number;
    static FOCUS_EVENT_MASK: number;
    static HIERARCHY_BOUNDS_EVENT_MASK: number;
    static HIERARCHY_EVENT_MASK: number;
    static INPUT_METHOD_EVENT_MASK: number;
    static INVOCATION_EVENT_MASK: number;
    static ITEM_EVENT_MASK: number;
    static KEY_EVENT_MASK: number;
    static META_DOWN_MASK: number;
    static META_MASK: number;
    static MOUSE_CLICKED: number;
    static MOUSE_DRAGGED: number;
    static MOUSE_ENTERED: number;
    static MOUSE_EVENT_MASK: number;
    static MOUSE_EXITED: number;
    static MOUSE_FIRST: number;
    static MOUSE_LAST: number;
    static MOUSE_MOTION_EVENT_MASK: number;
    static MOUSE_MOVED: number;
    static MOUSE_PRESSED: number;
    static MOUSE_RELEASED: number;
    static MOUSE_WHEEL: number;
    static MOUSE_WHEEL_EVENT_MASK: number;
    static NOBUTTON: number;
    static PAINT_EVENT_MASK: number;
    static RESERVED_ID_MAX: number;
    static SHIFT_DOWN_MASK: number;
    static SHIFT_MASK: number;
    static TEXT_EVENT_MASK: number;
    static WINDOW_EVENT_MASK: number;
    static WINDOW_FOCUS_EVENT_MASK: number;
    static WINDOW_STATE_EVENT_MASK: number;
    static getMaskForButton(paramarg0: number): number;
    static getModifiersExText(paramarg0: number): string;
    static getMouseModifiersText(paramarg0: number): string;
    constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: MenuElement[], arg9: MenuSelectionManager)
    constructor(arg0: Component, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: MenuElement[], arg11: MenuSelectionManager)
    // private manager: MenuSelectionManager;
    readonly path: MenuElement[];
    getMenuSelectionManager(): MenuSelectionManager;
    getPath(): MenuElement[];
}