import type { ImmutableListMultimap } from '../../../../com/google/common/collect/ImmutableListMultimap.d.ts'
import type { ImmutableListMultimap$Builder } from '../../../../com/google/common/collect/ImmutableListMultimap$Builder.d.ts'
import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class EmptyImmutableListMultimap extends ImmutableListMultimap<Object, Object> {
    static builder(): ImmutableListMultimap$Builder<Object, Object>;
    static builder(): ImmutableMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableListMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableMultimap$Builder<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableListMultimap<Object, Object>;
    static copyOf(paramentries: Map$Entry<Object, Object>[]): ImmutableListMultimap<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableMultimap<Object, Object>;
    static copyOf(paramentries: Map$Entry<Object, Object>[]): ImmutableMultimap<Object, Object>;
    static flatteningToImmutableListMultimap(paramkeyFunction: (param0: Object) => Object | null, paramvaluesFunction: (param0: Object) => Stream<Object>): Collector<Object, Object, ImmutableListMultimap<Object, Object>>;
    static of(): ImmutableListMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableListMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableListMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableListMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableListMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableListMultimap<Object, Object>;
    static of(): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableMultimap<Object, Object>;
    static toImmutableListMultimap(paramkeyFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null): Collector<Object, Object, ImmutableListMultimap<Object, Object>>;
    private constructor()
    asMap(): Map<Object, Object[]>;
    // private readResolve(): Object;
}