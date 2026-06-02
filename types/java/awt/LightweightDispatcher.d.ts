import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { AWTEventListener } from '../../java/awt/event/AWTEventListener.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { SunDropTargetEvent } from '../../sun/awt/dnd/SunDropTargetEvent.d.ts'
export class LightweightDispatcher extends Object implements AWTEventListener, Serializable {
    constructor(arg0: Container)
    // private eventMask: number;
    // private focus: Component;
    // private isMouseDTInNativeContainer: boolean;
    // private isMouseInNativeContainer: boolean;
    // private mouseEventTarget: WeakReference<Component>;
    // private nativeContainer: Container;
    // private nativeCursor: Cursor;
    // private targetLastEntered: WeakReference<Component>;
    // private targetLastEnteredDT: WeakReference<Component>;
    dispatchEvent(arg0: AWTEvent): boolean;
    dispose(): void;
    enableEvents(arg0: number): void;
    eventDispatched(arg0: AWTEvent): void;
    // private isMouseGrab(arg0: MouseEvent): boolean;
    // private processDropTargetEvent(arg0: SunDropTargetEvent): boolean;
    // private processMouseEvent(arg0: MouseEvent): boolean;
    // private retargetMouseEnterExit(arg0: Component, arg1: MouseEvent, arg2: Component, arg3: boolean): Component;
    retargetMouseEvent(arg0: Component, arg1: number, arg2: MouseEvent): void;
    // private startListeningForOtherDrags(): void;
    // private stopListeningForOtherDrags(): void;
    // private trackDropTargetEnterExit(arg0: Component, arg1: MouseEvent): void;
    // private trackMouseEnterExit(arg0: Component, arg1: MouseEvent): void;
}