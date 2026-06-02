import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { SculkSensorBlockEntity$VibrationUser } from '../../../../../../net/minecraft/world/level/block/entity/SculkSensorBlockEntity$VibrationUser.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
export class CalibratedSculkSensorBlockEntity$VibrationUser extends SculkSensorBlockEntity$VibrationUser {
    static LISTENER_RANGE: number;
    constructor(null_: CalibratedSculkSensorBlockEntity$VibrationUser, blockPos: BlockPos)
    canReceiveVibration(level: ServerLevel, pos: BlockPos, event: Holder<GameEvent>, context: GameEvent$Context): boolean;
    // private getBackSignal(level: Level, pos: BlockPos, state: BlockState): number;
    getListenerRadius(): number;
}