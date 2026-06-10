import type { ImmutableStringReader } from '../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Decoder } from '../../../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemPredicateArgument$ComponentWrapper extends Record {
    static create(paramreader: ImmutableStringReader, paramid: Identifier, paramtype: DataComponentType<Object>): ItemPredicateArgument$ComponentWrapper;
    private constructor(id: Identifier, presenceChecker: (param0: ItemStack) => boolean, valueChecker: Decoder<(param0: ItemStack) => boolean>)
    // private id: Identifier;
    // private presenceChecker: (param0: ItemStack) => boolean;
    // private valueChecker: Decoder<(param0: ItemStack) => boolean>;
    decode(reader: ImmutableStringReader, value: Dynamic<Object>): (param0: ItemStack) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    presenceChecker(): (param0: ItemStack) => boolean;
    toString(): string;
    valueChecker(): Decoder<(param0: ItemStack) => boolean>;
}