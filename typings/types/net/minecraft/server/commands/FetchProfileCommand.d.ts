import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Avatar } from '../../../../net/minecraft/world/entity/Avatar.d.ts'
export class FetchProfileCommand extends Object {
    static printForAvatar(paramsource: CommandSourceStack, paramavatar: Avatar): void;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}