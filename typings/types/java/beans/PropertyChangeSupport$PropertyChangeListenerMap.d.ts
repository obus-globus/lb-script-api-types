import type { ChangeListenerMap } from '../../java/beans/ChangeListenerMap.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
export class PropertyChangeSupport$PropertyChangeListenerMap extends ChangeListenerMap<PropertyChangeListener> {
    private constructor()
    extract(arg0: PropertyChangeListener): PropertyChangeListener;
    newArray(arg0: number): PropertyChangeListener[];
    newProxy(arg0: string, arg1: PropertyChangeListener): PropertyChangeListener;
}