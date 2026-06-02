import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
export class DifficultyCommand extends Object {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    static setDifficulty(paramsource: CommandSourceStack, paramdifficulty: Difficulty): number;
    constructor()
}