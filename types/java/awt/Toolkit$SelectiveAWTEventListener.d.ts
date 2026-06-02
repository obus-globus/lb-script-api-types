import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { AWTEventListener } from '../../java/awt/event/AWTEventListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Toolkit$SelectiveAWTEventListener extends Object implements AWTEventListener {
    constructor(arg0: AWTEventListener, arg1: number)
    calls: number[];
    readonly eventMask: number;
    listener: AWTEventListener;
    eventDispatched(arg0: AWTEvent): void;
    getCalls(): number[];
    getEventMask(): number;
    getListener(): AWTEventListener;
    orEventMasks(arg0: number): void;
}