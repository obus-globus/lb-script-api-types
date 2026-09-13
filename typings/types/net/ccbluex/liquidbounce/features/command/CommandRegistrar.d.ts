import type { CommandDispatcher } from '../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * A command that registers itself onto a Brigadier {@link CommandDispatcher}.
 *
 * Every inbuilt command is an `object` implementing this interface; the {@link CommandManager}
 * registers them through {@link CommandManager.register}. Scripts register their command nodes
 * through {@link CommandManager.registerScriptCommands} instead.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandRegistrar.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandRegistrar.kt:32}
 */
export interface CommandRegistrar extends Object{
    /**
     * Registers this command onto the {@link dispatcher}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandRegistrar.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandRegistrar.kt:37}
     */
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}