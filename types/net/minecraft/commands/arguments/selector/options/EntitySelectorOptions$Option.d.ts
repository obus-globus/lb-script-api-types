import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitySelectorParser } from '../../../../../../net/minecraft/commands/arguments/selector/EntitySelectorParser.d.ts'
import type { EntitySelectorOptions$Modifier } from '../../../../../../net/minecraft/commands/arguments/selector/options/EntitySelectorOptions$Modifier.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class EntitySelectorOptions$Option extends Record {
    private constructor(modifier: (param0: EntitySelectorParser) => void, canUse: (param0: EntitySelectorParser) => kotlin.Boolean, description: Component)
    // private canUse: (param0: EntitySelectorParser) => kotlin.Boolean;
    // private description: Component;
    // private modifier: (param0: EntitySelectorParser) => void;
    canUse(): (param0: EntitySelectorParser) => kotlin.Boolean;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifier(): (param0: EntitySelectorParser) => void;
    toString(): string;
}