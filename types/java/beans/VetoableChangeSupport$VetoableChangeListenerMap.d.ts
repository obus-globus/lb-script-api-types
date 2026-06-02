import type { ChangeListenerMap } from '../../java/beans/ChangeListenerMap.d.ts'
import type { VetoableChangeListener } from '../../java/beans/VetoableChangeListener.d.ts'
export class VetoableChangeSupport$VetoableChangeListenerMap extends ChangeListenerMap<VetoableChangeListener> {
    private constructor()
    extract(arg0: VetoableChangeListener): VetoableChangeListener;
    newArray(arg0: number): VetoableChangeListener[];
    newProxy(arg0: string, arg1: VetoableChangeListener): VetoableChangeListener;
}