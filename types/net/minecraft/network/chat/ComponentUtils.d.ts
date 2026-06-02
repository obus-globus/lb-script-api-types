import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export class ComponentUtils extends Object {
    static DEFAULT_NO_STYLE_SEPARATOR: Component;
    static DEFAULT_SEPARATOR: Component;
    static DEFAULT_SEPARATOR_TEXT: string;
    static copyOnClickText(paramtext: string): MutableComponent;
    static formatAndSortList(paramvalues: E[], paramformatter: (param0: Object | null) => Component): Component;
    static formatList(paramvalues: E[], paramformatter: (param0: Object | null) => Component): Component;
    static formatList(paramvalues: E[], paramseparator: Optional<Object>, paramformatter: (param0: Object | null) => Component): MutableComponent;
    static formatList(paramvalues: E[], paramseparator: Component, paramformatter: (param0: Object | null) => Component): MutableComponent;
    static formatList(paramvalues: E[], paramseparator: Component): Component;
    static formatList(paramvalues: E[]): Component;
    static fromMessage(parammessage: Message): Component;
    static isTranslationResolvable(paramcomponent: Component): boolean;
    static mergeStyles(paramcomponent: Component, paramstyle: Style): Component;
    static mergeStyles(paramcomponent: MutableComponent, paramstyle: Style): MutableComponent;
    static resolve(paramcontext: ResolutionContext, paramcomponent: Optional<Component>, paramrecursionDepth: number): Optional<MutableComponent>;
    static resolve(paramcontext: ResolutionContext, paramcomponent: Component): MutableComponent;
    static resolve(paramcontext: ResolutionContext, paramcomponent: Component, paramrecursionDepth: number): MutableComponent;
    static wrapInSquareBrackets(paraminner: Component): MutableComponent;
    constructor()
}