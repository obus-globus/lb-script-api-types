import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class NetherPortal extends Object implements MinecraftShortcuts {
    constructor(origin: BlockPos, down: boolean, direction: Direction, rotated: Direction)
    readonly direction: Direction;
    readonly down: boolean;
    // private edgeBlocks: BlockPos[];
    readonly enclosedBlocks: BlockPos[];
    readonly frameBlocks: BlockPos[];
    readonly ignitePos: BlockPos;
    readonly origin: BlockPos;
    score: number;
    /**
     * Scores the potential portal about how favourable it would be, to find the best place position.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:58}
     */
    calculateScore(): void;
    /**
     * Returns a list with all the positions that should be obsidian but aren't.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:115}
     */
    confirmPlacements(): BlockPos[];
    /**
     * Whether the score is `-1`, meaning we can't build this portal without additional actions such as breaking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt#L125 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/NetherPortal.kt:125}
     */
    isValid(): boolean;
}