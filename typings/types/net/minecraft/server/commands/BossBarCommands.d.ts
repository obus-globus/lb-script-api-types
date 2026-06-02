import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CustomBossEvent } from '../../../../net/minecraft/server/bossevents/CustomBossEvent.d.ts'
export class BossBarCommands extends Object {
    static SUGGEST_BOSS_BAR: (param0: CommandSourceStack, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static getBossBar(paramcontext: CommandContext<CommandSourceStack>): CustomBossEvent;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    constructor()
}