import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
export class WrittenBookPredicate$PagePredicate extends Record implements Predicate<Filterable<Component>> {
    static CODEC: Codec<WrittenBookPredicate$PagePredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor(contents: Component)
    // private contents: Component;
    and(arg0: (param0: Filterable<Component>) => boolean): (param0: Filterable<Component>) => boolean;
    contents(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: Filterable<Component>) => boolean;
    or(arg0: (param0: Filterable<Component>) => boolean): (param0: Filterable<Component>) => boolean;
    test(value: Filterable<Component>): boolean;
    toString(): string;
}