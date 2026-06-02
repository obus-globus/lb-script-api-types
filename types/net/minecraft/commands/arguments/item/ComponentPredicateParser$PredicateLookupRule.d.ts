import type { ImmutableStringReader } from '../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComponentPredicateParser$Context } from '../../../../../net/minecraft/commands/arguments/item/ComponentPredicateParser$Context.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ResourceLookupRule } from '../../../../../net/minecraft/util/parsing/packrat/commands/ResourceLookupRule.d.ts'
export class ComponentPredicateParser$PredicateLookupRule<T extends Object | number | string | boolean, C extends Object | number | string | boolean, P extends Object | number | string | boolean> extends ResourceLookupRule<ComponentPredicateParser$Context<T, C, P>, P> {
    private constructor(idParser: NamedRule<StringReader, Identifier>, context: ComponentPredicateParser$Context<T, C, P>)
    possibleResources(): Stream<Identifier>;
    validateElement(reader: ImmutableStringReader, id: Identifier): P;
}