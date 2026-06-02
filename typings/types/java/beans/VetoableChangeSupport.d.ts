import type { PropertyChangeEvent } from '../../java/beans/PropertyChangeEvent.d.ts'
import type { VetoableChangeListener } from '../../java/beans/VetoableChangeListener.d.ts'
import type { VetoableChangeSupport$VetoableChangeListenerMap } from '../../java/beans/VetoableChangeSupport$VetoableChangeListenerMap.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class VetoableChangeSupport extends Object implements Serializable {
    constructor(arg0: Object)
    // private map: VetoableChangeSupport$VetoableChangeListenerMap;
    // private source: Object;
    addVetoableChangeListener(arg0: VetoableChangeListener): void;
    addVetoableChangeListener(arg0: string, arg1: VetoableChangeListener): void;
    fireVetoableChange(arg0: PropertyChangeEvent): void;
    fireVetoableChange(arg0: string, arg1: Object, arg2: Object): void;
    fireVetoableChange(arg0: string, arg1: boolean, arg2: boolean): void;
    fireVetoableChange(arg0: string, arg1: number, arg2: number): void;
    getVetoableChangeListeners(): VetoableChangeListener[];
    getVetoableChangeListeners(arg0: string): VetoableChangeListener[];
    hasListeners(arg0: string): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    removeVetoableChangeListener(arg0: VetoableChangeListener): void;
    removeVetoableChangeListener(arg0: string, arg1: VetoableChangeListener): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}