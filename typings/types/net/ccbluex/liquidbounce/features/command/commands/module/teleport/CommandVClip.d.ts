import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * VClip Command
 *
 * Allows you to clip through blocks.
 *
 * Module: {@link ModuleTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandVClip.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandVClip.kt:46}
 */
export class CommandVClip extends Object implements Command$Factory {
    static INSTANCE: CommandVClip;
    // private buildAutomaticCommand(direction: Direction, name: string): Command;
    // private canTpOn(pos: BlockPos, posCollisionShape: VoxelShape): boolean;
    createCommand(): Command;
    // private getX(): number;
    // private getY(): number;
    // private getZ(): number;
    // private isNotEnoughSpaceAboveBlock(pos: BlockPos, boundingBox: AABB, posCollisionShape: VoxelShape): boolean;
    // private performAutomaticClip(args: Object[], command: Command, direction: Direction): void;
}