import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunDropTargetContextPeer } from '../../../sun/awt/dnd/SunDropTargetContextPeer.d.ts'
import type { SunDropTargetEvent } from '../../../sun/awt/dnd/SunDropTargetEvent.d.ts'
export class SunDropTargetContextPeer$EventDispatcher extends Object {
    constructor(arg0: SunDropTargetContextPeer, arg1: number, arg2: number, arg3: number[], arg4: number, arg5: boolean)
    // private actions: number;
    // private dispatchType: boolean;
    // private dispatcherDone: boolean;
    // private dropAction: number;
    // private eventSet: SunDropTargetEvent[];
    // private formats: number[];
    // private nativeCtxt: number;
    // private peer: SunDropTargetContextPeer;
    // private returnValue: number;
    // private dispatchDropEvent(arg0: SunDropTargetEvent): void;
    // private dispatchEnterEvent(arg0: SunDropTargetEvent): void;
    dispatchEvent(arg0: SunDropTargetEvent): void;
    // private dispatchExitEvent(arg0: SunDropTargetEvent): void;
    // private dispatchMotionEvent(arg0: SunDropTargetEvent): void;
    getReturnValue(): number;
    isDone(): boolean;
    registerEvent(arg0: SunDropTargetEvent): void;
    setReturnValue(arg0: number): void;
    unregisterAllEvents(): void;
    unregisterEvent(arg0: SunDropTargetEvent): void;
}