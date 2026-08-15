import type { GpuDevice } from '../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Command$Handler } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class CommandBuilder extends Object implements MinecraftShortcuts {
    static Companion: CommandBuilder$Companion;
    static begin(name: string): CommandBuilder;
    private constructor(name: string)
    // private aliases: string[] | null;
    // private executable: boolean;
    readonly gpuDevice: GpuDevice;
    // private handler: Command$Handler | null;
    // private ingame: boolean;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly name: string;
    readonly network: ClientPacketListener;
    // private parameters: Parameter<Object>[];
    readonly player: LocalPlayer;
    // private subcommands: Command[];
    readonly world: ClientLevel;
    alias(...aliases: string[]): CommandBuilder;
    build(): Command;
    handler(handler: Command$Handler): CommandBuilder;
    /**
     * If a command is marked as a hub command, it is impossible to execute it.
     *
     * For example, <code>.friend</code>
     *
     * The command _friend_ would not be executable since it just acts as a
     * hub for its subcommands
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt:78}
     */
    hub(): CommandBuilder;
    parameter(parameter: Parameter<Object>): CommandBuilder;
    /**
     * Doesn't allow the command do be executed if either the world or the player are `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt:66}
     */
    requiresIngame(): CommandBuilder;
    subcommand(subcommand: Command): CommandBuilder;
    subcommand(subcommandFactory: Command$Factory): CommandBuilder;
}