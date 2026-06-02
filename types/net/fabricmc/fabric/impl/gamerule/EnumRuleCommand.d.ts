import type { LiteralArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class EnumRuleCommand extends Object {
    static executeAndSetEnum(paramarg0: CommandContext<CommandSourceStack>, paramarg1: Object | null, paramarg2: GameRule<Object>): number;
    static register(paramarg0: LiteralArgumentBuilder<CommandSourceStack>, paramarg1: GameRule<Object>): void;
    constructor()
}