import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class FocusTraversalPolicy extends Object {
    constructor()
    getComponentAfter(arg0: Container, arg1: Component): Component;
    getComponentBefore(arg0: Container, arg1: Component): Component;
    getDefaultComponent(arg0: Container): Component;
    getFirstComponent(arg0: Container): Component;
    getInitialComponent(arg0: Window): Component;
    getLastComponent(arg0: Container): Component;
}