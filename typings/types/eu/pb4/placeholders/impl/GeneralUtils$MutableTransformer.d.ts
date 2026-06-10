import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export class GeneralUtils$MutableTransformer extends Record implements Function<MutableComponent, Component> {
    static CLEAR: GeneralUtils$MutableTransformer;
    static identity(): (param0: Object | null) => Object | null;
    constructor(textMutableTextFunction: (param0: Style) => Style)
    // private textMutableTextFunction: (param0: Style) => Style;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: Component) => V): (param0: MutableComponent) => V;
    apply(arg0: MutableComponent): Component;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => MutableComponent): (param0: V) => Component;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    textMutableTextFunction(): (param0: Style) => Style;
    toString(): string;
    // private transformStyle(arg0: MutableComponent): MutableComponent;
}