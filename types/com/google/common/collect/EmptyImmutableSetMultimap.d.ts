import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { ImmutableSetMultimap } from '../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { ImmutableSetMultimap$Builder } from '../../../../com/google/common/collect/ImmutableSetMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmptyImmutableSetMultimap extends ImmutableSetMultimap<Object, Object> {
    static builder(): ImmutableMultimap$Builder<Object, Object>;
    static builder(): ImmutableSetMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableMultimap$Builder<Object, Object>;
    static builderWithExpectedKeys(paramexpectedKeys: number): ImmutableSetMultimap$Builder<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableMultimap<Object, Object>;
    static copyOf(paramentries: (Object | null)[]): ImmutableMultimap<Object, Object>;
    static copyOf(parammultimap: Multimap<Object, Object>): ImmutableSetMultimap<Object, Object>;
    static copyOf(paramentries: (Object | null)[]): ImmutableSetMultimap<Object, Object>;
    static flatteningToImmutableSetMultimap(paramkeyFunction: (param0: Object | null) => Object | null, paramvaluesFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    static of(): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableMultimap<Object, Object>;
    static of(): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null): ImmutableSetMultimap<Object, Object>;
    static of(paramk1: Object | null, paramv1: Object | null, paramk2: Object | null, paramv2: Object | null, paramk3: Object | null, paramv3: Object | null, paramk4: Object | null, paramv4: Object | null, paramk5: Object | null, paramv5: Object | null): ImmutableSetMultimap<Object, Object>;
    static toImmutableSetMultimap(paramkeyFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    private constructor()
    asMap(): Map<Object, E[]>;
    // private readResolve(): Object;
}