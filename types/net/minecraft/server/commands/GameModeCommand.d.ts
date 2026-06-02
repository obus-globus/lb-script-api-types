import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
export class GameModeCommand extends Object {
    static PERMISSION_CHECK: PermissionCheck;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    static setGameMode(paramplayer: ServerPlayer, paramtype: GameType): void;
    constructor()
}