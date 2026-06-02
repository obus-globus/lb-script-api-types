import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameRuleCommandAccessor } from '../../../../net/fabricmc/fabric/mixin/gamerule/GameRuleCommandAccessor.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class GameRuleCommand extends Object implements GameRuleCommandAccessor {
    static callQueryRule(paramarg0: CommandSourceStack, paramarg1: GameRule<Object>): number;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    constructor()
}