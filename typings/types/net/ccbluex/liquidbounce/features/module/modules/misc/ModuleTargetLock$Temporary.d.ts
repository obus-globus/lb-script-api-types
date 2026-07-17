import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleTargetLock$LockMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock$LockMode.d.ts'
import type { ModuleTargetLock$Temporary$NoLockMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock$Temporary$NoLockMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class ModuleTargetLock$Temporary extends ModuleTargetLock$LockMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleTargetLock$Temporary;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private cleanUpTask: EventHook<GameTickEvent>;
    // private lockList: JavaMap<any, any>;
    // private outOfRange: number;
    // private /*not mapped: */ getOutOfRange(): number;
    // private timeUntilReset: number;
    // private /*not mapped: */ getTimeUntilReset(): number;
    // private whenNoLock: ModuleTargetLock$Temporary$NoLockMode;
    // private /*not mapped: */ getWhenNoLock(): ModuleTargetLock$Temporary$NoLockMode;
    isLockedOn(playerEntity: AbstractClientPlayer): boolean;
}