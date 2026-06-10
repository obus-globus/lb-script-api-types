import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitySelectorParser } from '../../../../../../net/minecraft/commands/arguments/selector/EntitySelectorParser.d.ts'
import type { EntitySelectorOptions$Modifier } from '../../../../../../net/minecraft/commands/arguments/selector/options/EntitySelectorOptions$Modifier.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class EntitySelectorOptionRegistry extends Object {
    static register(paramarg0: Identifier, paramarg1: Component, paramarg2: (param0: EntitySelectorParser) => void, paramarg3: (param0: EntitySelectorParser) => boolean): void;
    static registerNonRepeatable(paramarg0: Identifier, paramarg1: Component, paramarg2: (param0: EntitySelectorParser) => void): void;
    private constructor()
}