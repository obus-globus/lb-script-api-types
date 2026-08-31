import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Config Command
 *
 * Provides various subcommands related to the configuration,
 * such as loading configuration from an external source or an API
 * and listing available configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt:73}
 */
export class CommandConfig extends Object implements CommandRegistrar {
    static INSTANCE: CommandConfig;
    // private CONFIGS_URL: string;
    // private hoverText(settingName: string): Component;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private reloadConfigs($completion: Continuation<void>): any;
}