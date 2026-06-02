import type { Component } from '../../java/awt/Component.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Popup extends Object {
    constructor()
    constructor(arg0: Component, arg1: Component, arg2: number, arg3: number)
    // private component: Component;
    createComponent(arg0: Component): Component;
    dispose(): void;
    getComponent(): Component;
    // private getParentWindow(arg0: Component): Window;
    hide(): void;
    pack(): void;
    reset(arg0: Component, arg1: Component, arg2: number, arg3: number): void;
    show(): void;
}