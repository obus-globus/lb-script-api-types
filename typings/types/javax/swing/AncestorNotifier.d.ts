import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { ComponentEvent } from '../../java/awt/event/ComponentEvent.d.ts'
import type { ComponentListener } from '../../java/awt/event/ComponentListener.d.ts'
import type { PropertyChangeEvent } from '../../java/beans/PropertyChangeEvent.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { AncestorListener } from '../../javax/swing/event/AncestorListener.d.ts'
import type { EventListenerList } from '../../javax/swing/event/EventListenerList.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AncestorNotifier extends Object implements ComponentListener, PropertyChangeListener, Serializable {
    constructor(arg0: JComponent)
    // private firstInvisibleAncestor: Component;
    // private listenerList: EventListenerList;
    // private root: JComponent;
    addAncestorListener(arg0: AncestorListener): void;
    addListeners(arg0: Component, arg1: boolean): void;
    componentHidden(arg0: ComponentEvent): void;
    componentMoved(arg0: ComponentEvent): void;
    componentResized(arg0: ComponentEvent): void;
    componentShown(arg0: ComponentEvent): void;
    fireAncestorAdded(arg0: JComponent, arg1: number, arg2: Container, arg3: Container): void;
    fireAncestorMoved(arg0: JComponent, arg1: number, arg2: Container, arg3: Container): void;
    fireAncestorRemoved(arg0: JComponent, arg1: number, arg2: Container, arg3: Container): void;
    getAncestorListeners(): AncestorListener[];
    propertyChange(arg0: PropertyChangeEvent): void;
    removeAllListeners(): void;
    removeAncestorListener(arg0: AncestorListener): void;
    removeListeners(arg0: Component): void;
}