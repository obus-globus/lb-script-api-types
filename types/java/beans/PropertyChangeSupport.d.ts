import type { PropertyChangeEvent } from '../../java/beans/PropertyChangeEvent.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport$PropertyChangeListenerMap } from '../../java/beans/PropertyChangeSupport$PropertyChangeListenerMap.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PropertyChangeSupport extends Object implements Serializable {
    constructor(arg0: Object)
    // private map: PropertyChangeSupport$PropertyChangeListenerMap;
    // private source: Object;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    addPropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    fireIndexedPropertyChange(arg0: string, arg1: number, arg2: Object, arg3: Object): void;
    fireIndexedPropertyChange(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
    fireIndexedPropertyChange(arg0: string, arg1: number, arg2: number, arg3: number): void;
    firePropertyChange(arg0: PropertyChangeEvent): void;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    getPropertyChangeListeners(): PropertyChangeListener[];
    getPropertyChangeListeners(arg0: string): PropertyChangeListener[];
    hasListeners(arg0: string): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    removePropertyChangeListener(arg0: string, arg1: PropertyChangeListener): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}