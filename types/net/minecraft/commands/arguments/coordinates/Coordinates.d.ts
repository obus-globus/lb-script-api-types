import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface Coordinates extends Object{
    getBlockPos(sender: CommandSourceStack): BlockPos;
    getPosition(sender: CommandSourceStack): Vec3;
    getRotation(sender: CommandSourceStack): Vec2;
    isXRelative(): boolean;
    isYRelative(): boolean;
    isZRelative(): boolean;
}