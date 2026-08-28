import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * VClip Command
 *
 * Allows you to clip through blocks.
 *
 * Module: {@link ModuleTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandVClip.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandVClip.kt:51}
 */
export class CommandVClip extends Object implements CommandRegistrar {
    static INSTANCE: CommandVClip;
    // private canTpOn(pos: BlockPos, posCollisionShape: VoxelShape): boolean;
    // private getX(): number;
    // private getY(): number;
    // private getZ(): number;
    // private isNotEnoughSpaceAboveBlock(pos: BlockPos, boundingBox: AABB, posCollisionShape: VoxelShape): boolean;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}