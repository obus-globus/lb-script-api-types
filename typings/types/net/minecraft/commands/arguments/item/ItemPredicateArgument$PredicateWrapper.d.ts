import type { ImmutableStringReader } from '../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Decoder } from '../../../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemPredicateArgument$PredicateWrapper extends Record {
    constructor(holder: Holder$Reference<DataComponentPredicate$Type<any>>)
    // private id: Identifier;
    // private type: Decoder<(param0: ItemStack) => boolean>;
    decode(reader: ImmutableStringReader, value: Dynamic<Object>): (param0: ItemStack) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
    type(): Decoder<(param0: ItemStack) => boolean>;
}