import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MoveToBlockGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MoveToBlockGoal.d.ts'
import type { Rabbit } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export class Rabbit$RaidGardenGoal extends MoveToBlockGoal {
    constructor(rabbit: Rabbit)
    // private canRaid: boolean;
    // private rabbit: Rabbit;
    // private wantsToRaid: boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    tick(): void;
}