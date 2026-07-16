import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
export class WritableBookPredicate$PagePredicate extends Record implements Predicate<Filterable<string>> {
    static CODEC: Codec<WritableBookPredicate$PagePredicate>;
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(contents: string)
    // private contents: string;
    and(arg0: (param0: Filterable<string>) => boolean): (param0: Filterable<string>) => boolean;
    contents(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: Filterable<string>) => boolean;
    or(arg0: (param0: Filterable<string>) => boolean): (param0: Filterable<string>) => boolean;
    test(value: Filterable<string>): boolean;
    toString(): string;
}