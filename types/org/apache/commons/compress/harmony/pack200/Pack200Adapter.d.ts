import type { PropertyChangeListener } from '../../../../../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../../../../../java/beans/PropertyChangeSupport.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Pack200Adapter extends Object {
    constructor()
    // private properties: { [key: string]: string };
    // private support: PropertyChangeSupport;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    completed(arg0: number): void;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    properties(): { [key: string]: string };
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
}