import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackSource } from '../../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export class BuiltinModPackSource extends Record implements PackSource {
    static BUILT_IN: PackSource;
    static DEFAULT: PackSource;
    static FEATURE: PackSource;
    static NO_DECORATION: (param0: Component) => Object | null;
    static SERVER: PackSource;
    static WORLD: PackSource;
    static create(paramdecorator: (param0: Component) => Object | null, paramaddAutomatically: boolean): PackSource;
    constructor(modId: string)
    // private modId: string;
    decorate(arg0: Component): Component;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modId(): string;
    shouldAddAutomatically(): boolean;
    toString(): string;
}