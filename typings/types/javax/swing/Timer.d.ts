import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { AtomicBoolean } from '../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Lock } from '../../java/util/concurrent/locks/Lock.d.ts'
import type { TimerQueue } from '../../javax/swing/TimerQueue.d.ts'
import type { TimerQueue$DelayedTimer } from '../../javax/swing/TimerQueue$DelayedTimer.d.ts'
import type { EventListenerList } from '../../javax/swing/event/EventListenerList.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Timer extends Object implements Serializable {
    static getLogTimers(): boolean;
    static setLogTimers(paramarg0: boolean): void;
    constructor(arg0: number, arg1: ActionListener)
    readonly actionCommand: string;
    readonly coalesce: boolean;
    readonly delay: number;
    // private delayedTimer: TimerQueue$DelayedTimer;
    // private doPostEvent: () => void;
    readonly initialDelay: number;
    // private listenerList: EventListenerList;
    // private lock: Lock;
    // private notify: AtomicBoolean;
    readonly repeats: boolean;
    addActionListener(arg0: ActionListener): void;
    cancelEvent(): void;
    fireActionPerformed(arg0: ActionEvent): void;
    getActionCommand(): string;
    getActionListeners(): ActionListener[];
    getDelay(): number;
    getInitialDelay(): number;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getLock(): Lock;
    isCoalesce(): boolean;
    isRepeats(): boolean;
    isRunning(): boolean;
    post(): void;
    // private readObject(arg0: ObjectInputStream): void;
    // private readResolve(): Object;
    removeActionListener(arg0: ActionListener): void;
    restart(): void;
    setActionCommand(arg0: string): void;
    setCoalesce(arg0: boolean): void;
    setDelay(arg0: number): void;
    setInitialDelay(arg0: number): void;
    setRepeats(arg0: boolean): void;
    start(): void;
    stop(): void;
    // private timerQueue(): TimerQueue;
}