import type { ImmutableStringReader } from '../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ComponentPredicateParser$Context<T extends unknown, C extends unknown, P extends unknown> extends Object{
    anyOf(alternatives: T[]): T;
    createComponentTest(reader: ImmutableStringReader, componentType: C): T;
    createComponentTest(reader: ImmutableStringReader, componentType: C, value: Dynamic<Object>): T;
    createPredicateTest(reader: ImmutableStringReader, predicateType: P, value: Dynamic<Object>): T;
    forElementType(reader: ImmutableStringReader, id: Identifier): T;
    forTagType(reader: ImmutableStringReader, id: Identifier): T;
    listComponentTypes(): Stream<Identifier>;
    listElementTypes(): Stream<Identifier>;
    listPredicateTypes(): Stream<Identifier>;
    listTagTypes(): Stream<Identifier>;
    lookupComponentType(reader: ImmutableStringReader, id: Identifier): C;
    lookupPredicateType(reader: ImmutableStringReader, id: Identifier): P;
    negate(value: T): T;
}