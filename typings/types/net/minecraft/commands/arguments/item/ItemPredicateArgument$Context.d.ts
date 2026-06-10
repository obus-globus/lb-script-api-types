import type { ImmutableStringReader } from '../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComponentPredicateParser$Context } from '../../../../../net/minecraft/commands/arguments/item/ComponentPredicateParser$Context.d.ts'
import type { ItemPredicateArgument$ComponentWrapper } from '../../../../../net/minecraft/commands/arguments/item/ItemPredicateArgument$ComponentWrapper.d.ts'
import type { ItemPredicateArgument$PredicateWrapper } from '../../../../../net/minecraft/commands/arguments/item/ItemPredicateArgument$PredicateWrapper.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemPredicateArgument$Context extends Object implements ComponentPredicateParser$Context<(param0: ItemStack) => boolean, ItemPredicateArgument$ComponentWrapper, ItemPredicateArgument$PredicateWrapper> {
    private constructor(registries: HolderLookup$Provider)
    // private components: HolderLookup$RegistryLookup<DataComponentType<Object>>;
    // private items: HolderLookup$RegistryLookup<Item>;
    // private predicates: HolderLookup$RegistryLookup<DataComponentPredicate$Type<Object>>;
    // private registries: HolderLookup$Provider;
    anyOf(alternatives: (param0: ItemStack) => boolean[]): (param0: ItemStack) => boolean;
    createComponentTest(reader: ImmutableStringReader, componentType: ItemPredicateArgument$ComponentWrapper): (param0: ItemStack) => boolean;
    createComponentTest(reader: ImmutableStringReader, componentType: ItemPredicateArgument$ComponentWrapper, value: Dynamic<Object>): (param0: ItemStack) => boolean;
    createPredicateTest(reader: ImmutableStringReader, predicateType: ItemPredicateArgument$PredicateWrapper, value: Dynamic<Object>): (param0: ItemStack) => boolean;
    forElementType(reader: ImmutableStringReader, id: Identifier): (param0: ItemStack) => boolean;
    forTagType(reader: ImmutableStringReader, id: Identifier): (param0: ItemStack) => boolean;
    listComponentTypes(): Stream<Identifier>;
    listElementTypes(): Stream<Identifier>;
    listPredicateTypes(): Stream<Identifier>;
    listTagTypes(): Stream<Identifier>;
    lookupComponentType(reader: ImmutableStringReader, componentId: Identifier): ItemPredicateArgument$ComponentWrapper;
    lookupPredicateType(reader: ImmutableStringReader, componentId: Identifier): ItemPredicateArgument$PredicateWrapper;
    negate(value: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
}