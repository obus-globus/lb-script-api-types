import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
export class DataComponentLookup$ComponentStorage<C extends unknown, T extends unknown> extends Record {
    private constructor(valueToComponent: Multimap<C, Holder<T>>)
    // private valueToComponent: Multimap<C, Holder<T>>;
    equals(o: Object | null): boolean;
    findAll(value: C): Holder<T>[];
    findMatching(predicate: (param0: C) => boolean): Stream<Holder<T>>;
    hashCode(): number;
    toString(): string;
    valueToComponent(): Multimap<C, Holder<T>>;
}