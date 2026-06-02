import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class PlaceholderResult extends Object {
    static invalid(): PlaceholderResult;
    static invalid(paramarg0: string): PlaceholderResult;
    static value(paramarg0: string): PlaceholderResult;
    static value(paramarg0: Component): PlaceholderResult;
    private constructor(arg0: Component, arg1: string)
    // private component: Component;
    readonly valid: boolean;
    component(): Component;
    isValid(): boolean;
}