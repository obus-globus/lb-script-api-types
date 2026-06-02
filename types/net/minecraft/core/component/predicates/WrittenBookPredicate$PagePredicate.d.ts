import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
export class WrittenBookPredicate$PagePredicate extends Record implements Predicate<Filterable<Component>> {
    static CODEC: Codec<WrittenBookPredicate$PagePredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(contents: Component)
    // private contents: Component;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    contents(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(value: Filterable<Component>): boolean;
    toString(): string;
}