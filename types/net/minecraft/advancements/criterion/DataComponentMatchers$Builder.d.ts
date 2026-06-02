import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { DataComponentExactPredicate } from '../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Type } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
export class DataComponentMatchers$Builder extends Object {
    static components(): DataComponentMatchers$Builder;
    private constructor()
    // private exact: DataComponentExactPredicate;
    // private partial: ImmutableMap$Builder<DataComponentPredicate$Type<Object>, DataComponentPredicate>;
    any(type: DataComponentType<Object>): DataComponentMatchers$Builder;
    build(): DataComponentMatchers;
    exact(exact: DataComponentExactPredicate): DataComponentMatchers$Builder;
    partial<T extends DataComponentPredicate>(type: DataComponentPredicate$Type<T>, predicate: T): DataComponentMatchers$Builder;
}