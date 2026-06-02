import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class FunctionInstantiationException extends Exception {
    constructor(messageComponent: Component)
    // private messageComponent: Component;
    messageComponent(): Component;
}