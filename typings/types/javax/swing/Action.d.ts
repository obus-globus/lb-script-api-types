import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Action extends ActionListener, Object{
    accept(arg0: Object): boolean;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    getValue(arg0: string): Object;
    isEnabled(): boolean;
    putValue(arg0: string, arg1: Object): void;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    setEnabled(arg0: boolean): void;
}