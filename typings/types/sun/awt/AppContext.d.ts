import type { JavaMap } from '../../JavaMap.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../java/beans/PropertyChangeSupport.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext$State } from '../../sun/awt/AppContext$State.d.ts'
import type { MostRecentKeyValue } from '../../sun/awt/MostRecentKeyValue.d.ts'
export class AppContext extends Object {
    static DISPOSED_PROPERTY_NAME: string;
    static EVENT_QUEUE_COND_KEY: Object;
    static EVENT_QUEUE_KEY: Object;
    static EVENT_QUEUE_LOCK_KEY: Object;
    static GUI_DISPOSED: string;
    static getAppContext(): AppContext;
    static getAppContexts(): AppContext[];
    static getSoftReferenceValue<T extends unknown>(paramarg0: Object, paramarg1: () => T): T;
    static isMainContext(paramarg0: AppContext): boolean;
    constructor(arg0: ThreadGroup)
    // private DISPOSAL_TIMEOUT: number;
    // private THREAD_INTERRUPT_TIMEOUT: number;
    // private changeSupport: PropertyChangeSupport;
    readonly contextClassLoader: ClassLoader;
    // private mostRecentKeyValue: MostRecentKeyValue;
    // private shadowMostRecentKeyValue: MostRecentKeyValue;
    // private state: AppContext$State;
    // private table: JavaMap<Object, Object>;
    readonly threadGroup: ThreadGroup;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    dispose(): void;
    get(arg0: Object): Object;
    getContextClassLoader(): ClassLoader;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(arg0: string): PropertyChangeListener[];
    getThreadGroup(): ThreadGroup;
    isDisposed(): boolean;
    put(arg0: Object, arg1: Object): Object;
    remove(arg0: Object): Object;
    removePropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    toString(): string;
}