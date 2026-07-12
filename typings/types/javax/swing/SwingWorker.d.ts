import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../java/beans/PropertyChangeSupport.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { FutureTask } from '../../java/util/concurrent/FutureTask.d.ts'
import type { RunnableFuture } from '../../java/util/concurrent/RunnableFuture.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { SwingWorker$StateValue } from '../../javax/swing/SwingWorker$StateValue.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AccumulativeRunnable } from '../../sun/swing/AccumulativeRunnable.d.ts'
export abstract class SwingWorker<T extends unknown, V extends unknown> extends Object implements RunnableFuture<T> {
    constructor()
    // private doNotifyProgressChange: AccumulativeRunnable<number>;
    // private doProcess: AccumulativeRunnable<V>;
    // private doSubmit: AccumulativeRunnable<() => void>;
    // private future: FutureTask<T>;
    readonly progress: number;
    readonly propertyChangeSupport: PropertyChangeSupport;
    readonly state: SwingWorker$StateValue;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    cancel(arg0: boolean): boolean;
    doInBackground(): T;
    done(): void;
    // private doneEDT(): void;
    execute(): void;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    get(): T;
    get(arg0: number, arg1: TimeUnit): T;
    getProgress(): number;
    getPropertyChangeSupport(): PropertyChangeSupport;
    getState(): SwingWorker$StateValue;
    isCancelled(): boolean;
    isDone(): boolean;
    process(arg0: V[]): void;
    publish(...arg0: V[]): void;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    run(): void;
    setProgress(arg0: number): void;
    // private setState(arg0: SwingWorker$StateValue): void;
}