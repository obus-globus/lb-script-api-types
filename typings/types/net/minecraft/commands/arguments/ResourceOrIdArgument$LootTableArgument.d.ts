import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResourceOrIdArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument.d.ts'
import type { ResourceOrIdArgument$DialogArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument$DialogArgument.d.ts'
import type { ResourceOrIdArgument$LootModifierArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument$LootModifierArgument.d.ts'
import type { ResourceOrIdArgument$LootPredicateArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument$LootPredicateArgument.d.ts'
import type { ResourceOrIdArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument$Result.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { Grammar } from '../../../../net/minecraft/util/parsing/packrat/commands/Grammar.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootItemFunction } from '../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ResourceOrIdArgument$LootTableArgument extends ResourceOrIdArgument<LootTable> {
    static ERROR_FAILED_TO_PARSE: DynamicCommandExceptionType;
    static ERROR_NO_SUCH_ELEMENT: Dynamic2CommandExceptionType;
    static OPS: DynamicOps<Tag>;
    static createGrammar<T extends unknown, O extends unknown>(paramregistryKey: ResourceKey<T[]>, paramops: DynamicOps<O>): Grammar<ResourceOrIdArgument$Result<T, O>>;
    static dialog(paramcontext: CommandBuildContext): ResourceOrIdArgument$DialogArgument;
    static getDialog(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder<Dialog>;
    static getLootModifier(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder<LootItemFunction>;
    static getLootPredicate(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder<LootItemCondition>;
    static getLootTable(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder<LootTable>;
    static lootModifier(paramcontext: CommandBuildContext): ResourceOrIdArgument$LootModifierArgument;
    static lootPredicate(paramcontext: CommandBuildContext): ResourceOrIdArgument$LootPredicateArgument;
    static lootTable(paramcontext: CommandBuildContext): ResourceOrIdArgument$LootTableArgument;
    constructor(context: CommandBuildContext)
}