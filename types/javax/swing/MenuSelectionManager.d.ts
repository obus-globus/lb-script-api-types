import type { Component } from '../../java/awt/Component.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { KeyEvent } from '../../java/awt/event/KeyEvent.d.ts'
import type { MouseEvent } from '../../java/awt/event/MouseEvent.d.ts'
import type { MenuElement } from '../../javax/swing/MenuElement.d.ts'
import type { ChangeEvent } from '../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { EventListenerList } from '../../javax/swing/event/EventListenerList.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MenuSelectionManager extends Object {
    static defaultManager(): MenuSelectionManager;
    constructor()
    // private changeEvent: ChangeEvent;
    // private listenerList: EventListenerList;
    // private selection: MenuElement[];
    addChangeListener(arg0: ChangeListener): void;
    clearSelectedPath(): void;
    componentForPoint(arg0: Component, arg1: Point): Component;
    fireStateChanged(): void;
    getChangeListeners(): ChangeListener[];
    getSelectedPath(): MenuElement[];
    isComponentPartOfCurrentMenu(arg0: Component): boolean;
    // private isComponentPartOfCurrentMenu(arg0: MenuElement, arg1: Component): boolean;
    // private printMenuElementArray(arg0: MenuElement[]): void;
    // private printMenuElementArray(arg0: MenuElement[], arg1: boolean): void;
    processKeyEvent(arg0: KeyEvent): void;
    processMouseEvent(arg0: MouseEvent): void;
    removeChangeListener(arg0: ChangeListener): void;
    setSelectedPath(arg0: MenuElement[]): void;
}