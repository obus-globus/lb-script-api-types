import type { JavaMap } from '../../JavaMap.d.ts'
import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Conditional } from '../../java/awt/Conditional.d.ts'
import type { EventFilter } from '../../java/awt/EventFilter.d.ts'
import type { EventQueue } from '../../java/awt/EventQueue.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { Duration } from '../../java/time/Duration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class EventDispatchThread extends Thread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): JavaMap<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static yield(): void;
    constructor(arg0: ThreadGroup, arg1: string, arg2: EventQueue)
    // private doDispatch: boolean;
    // private eventFilters: EventFilter[];
    // private theQueue: EventQueue;
    addEventFilter(arg0: EventFilter): void;
    filterAndCheckEvent(arg0: AWTEvent): boolean;
    getEventQueue(): EventQueue;
    // private processException(arg0: Throwable): void;
    pumpEvents(arg0: Conditional): void;
    pumpEvents(arg0: number, arg1: Conditional): void;
    pumpEventsForFilter(arg0: Conditional, arg1: EventFilter): void;
    pumpEventsForFilter(arg0: number, arg1: Conditional, arg2: EventFilter): void;
    pumpEventsForHierarchy(arg0: Conditional, arg1: Component): void;
    pumpEventsForHierarchy(arg0: number, arg1: Conditional, arg2: Component): void;
    pumpOneEventForFilters(arg0: number): void;
    removeEventFilter(arg0: EventFilter): void;
    run(): void;
    setEventQueue(arg0: EventQueue): void;
    stopDispatching(): void;
}