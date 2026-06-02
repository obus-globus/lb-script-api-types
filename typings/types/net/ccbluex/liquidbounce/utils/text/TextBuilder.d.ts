import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class TextBuilder extends Object {
    constructor()
    constructor(arg0: Component)
    // private inner: Object;
    // private size: number;
    append(arg0: Component): TextBuilder;
    build(): Component;
}