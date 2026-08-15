import type { GpuDevice } from '../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class NetherPortal extends Object implements MinecraftShortcuts {
    constructor(origin: BlockPos, down: boolean, direction: Direction, rotated: Direction)
    readonly direction: Direction;
    readonly down: boolean;
    // private edgeBlocks: BlockPos[];
    readonly enclosedBlocks: BlockPos[];
    readonly frameBlocks: BlockPos[];
    readonly gpuDevice: GpuDevice;
    readonly ignitePos: BlockPos;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly origin: BlockPos;
    readonly player: LocalPlayer;
    score: number;
    readonly world: ClientLevel;
    /**
     * Scores the potential portal about how favourable it would be, to find the best place position.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:58}
     */
    calculateScore(): void;
    /**
     * Returns a list with all the positions that should be obsidian but aren't.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:115}
     */
    confirmPlacements(): BlockPos[];
    /**
     * Whether the score is `-1`, meaning we can't build this portal without additional actions such as breaking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L125 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:125}
     */
    isValid(): boolean;
}