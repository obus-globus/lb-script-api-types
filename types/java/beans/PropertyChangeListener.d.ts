import type { PropertyChangeEvent } from '../../java/beans/PropertyChangeEvent.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PropertyChangeListener extends EventListener, Object{
    propertyChange(arg0: PropertyChangeEvent): void;
}