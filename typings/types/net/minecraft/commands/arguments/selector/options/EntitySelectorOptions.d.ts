import type { DynamicCommandExceptionType } from '../../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SimpleCommandExceptionType } from '../../../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitySelectorOptionsAccessor } from '../../../../../../net/fabricmc/fabric/mixin/command/EntitySelectorOptionsAccessor.d.ts'
import type { EntitySelectorParser } from '../../../../../../net/minecraft/commands/arguments/selector/EntitySelectorParser.d.ts'
import type { EntitySelectorOptions$Modifier } from '../../../../../../net/minecraft/commands/arguments/selector/options/EntitySelectorOptions$Modifier.d.ts'
export class EntitySelectorOptions extends Object implements EntitySelectorOptionsAccessor {
    static ERROR_ENTITY_TYPE_INVALID: DynamicCommandExceptionType;
    static ERROR_GAME_MODE_INVALID: DynamicCommandExceptionType;
    static ERROR_INAPPLICABLE_OPTION: DynamicCommandExceptionType;
    static ERROR_LEVEL_NEGATIVE: SimpleCommandExceptionType;
    static ERROR_LIMIT_TOO_SMALL: SimpleCommandExceptionType;
    static ERROR_RANGE_NEGATIVE: SimpleCommandExceptionType;
    static ERROR_SORT_UNKNOWN: DynamicCommandExceptionType;
    static ERROR_UNKNOWN_OPTION: DynamicCommandExceptionType;
    static bootStrap(): void;
    static get(paramparser: EntitySelectorParser, paramkey: string, paramstart: number): (param0: EntitySelectorParser) => void;
    static suggestNames(paramparser: EntitySelectorParser, parambuilder: SuggestionsBuilder): void;
    constructor()
}