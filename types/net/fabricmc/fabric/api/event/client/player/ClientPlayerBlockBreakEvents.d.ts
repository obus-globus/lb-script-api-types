import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientPlayerBlockBreakEvents$After } from '../../../../../../../net/fabricmc/fabric/api/event/client/player/ClientPlayerBlockBreakEvents$After.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ClientPlayerBlockBreakEvents extends Object {
    static AFTER: Event<(param0: ClientLevel, param1: LocalPlayer, param2: BlockPos, param3: BlockState) => void>;
    private constructor()
}