import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ThrowingComponent extends Exception {
    constructor(component: Component)
    constructor(component: Component, cause: Throwable)
    readonly component: Component;
    getComponent(): Component;
}