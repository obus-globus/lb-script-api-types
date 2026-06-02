import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Conditional } from '../../java/awt/Conditional.d.ts'
import type { EventDispatchThread } from '../../java/awt/EventDispatchThread.d.ts'
import type { EventFilter } from '../../java/awt/EventFilter.d.ts'
import type { Queue } from '../../java/awt/Queue.d.ts'
import type { SecondaryLoop } from '../../java/awt/SecondaryLoop.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { PaintEvent } from '../../java/awt/event/PaintEvent.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Condition } from '../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
import type { EventQueueItem } from '../../sun/awt/EventQueueItem.d.ts'
import type { FwDispatcher } from '../../sun/awt/FwDispatcher.d.ts'
import type { PeerEvent } from '../../sun/awt/PeerEvent.d.ts'
export class EventQueue extends Object {
    static getCurrentEvent(): AWTEvent;
    static getMostRecentEventTime(): number;
    static invokeAndWait(paramarg0: () => void): void;
    static invokeLater(paramarg0: () => void): void;
    static isDispatchThread(): boolean;
    constructor()
    // private appContext: AppContext;
    // private classLoader: ClassLoader;
    // private currentEvent: WeakReference<AWTEvent>;
    // private dispatchThread: EventDispatchThread;
    // private fwDispatcher: FwDispatcher;
    // private mostRecentEventTime: number;
    // private mostRecentKeyEventTime: number;
    // private name: string;
    // private nextQueue: EventQueue;
    // private previousQueue: EventQueue;
    // private pushPopCond: Condition;
    // private pushPopLock: Lock;
    // private queues: Queue[];
    // private threadGroup: ThreadGroup;
    // private waitForID: number;
    // private cacheEQItem(arg0: EventQueueItem): void;
    // private coalesceEvent(arg0: AWTEvent, arg1: number): boolean;
    // private coalesceMouseEvent(arg0: MouseEvent): boolean;
    // private coalesceOtherEvent(arg0: AWTEvent, arg1: number): boolean;
    // private coalescePaintEvent(arg0: PaintEvent): boolean;
    // private coalescePeerEvent(arg0: PeerEvent): boolean;
    createSecondaryLoop(): SecondaryLoop;
    createSecondaryLoop(arg0: Conditional, arg1: EventFilter, arg2: number): SecondaryLoop;
    detachDispatchThread(arg0: EventDispatchThread): void;
    dispatchEvent(arg0: AWTEvent): void;
    // private dispatchEventImpl(arg0: AWTEvent, arg1: Object): void;
    // private getCurrentEventImpl(): AWTEvent;
    getDispatchThread(): EventDispatchThread;
    getMostRecentEventTimeEx(): number;
    // private getMostRecentEventTimeImpl(): number;
    getMostRecentKeyEventTime(): number;
    getNextEvent(): AWTEvent;
    getNextEvent(arg0: number): AWTEvent;
    getNextEventPrivate(): AWTEvent;
    initDispatchThread(): void;
    isDispatchThreadImpl(): boolean;
    // private mergePaintEvents(arg0: PaintEvent, arg1: PaintEvent): PaintEvent;
    // private noEvents(): boolean;
    peekEvent(): AWTEvent;
    peekEvent(arg0: number): AWTEvent;
    pop(): void;
    postEvent(arg0: AWTEvent): void;
    // private postEvent(arg0: AWTEvent, arg1: number): void;
    // private postEventPrivate(arg0: AWTEvent): void;
    push(arg0: EventQueue): void;
    removeSourceEvents(arg0: Object, arg1: boolean): void;
    // private setCurrentEventAndMostRecentTimeImpl(arg0: AWTEvent): void;
    // private setFwDispatcher(arg0: FwDispatcher): void;
    // private uncacheEQItem(arg0: EventQueueItem): void;
    // private wakeup(arg0: boolean): void;
}