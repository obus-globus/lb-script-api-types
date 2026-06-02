import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleTargetLock$Filter$FilterType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock$Filter$FilterType.d.ts'
import type { ModuleTargetLock$LockMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock$LockMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class ModuleTargetLock$Filter extends ModuleTargetLock$LockMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleTargetLock$Filter;
    // private filterType: ModuleTargetLock$Filter$FilterType;
    // private /*not mapped: */ getFilterType(): ModuleTargetLock$Filter$FilterType;
    // private usernames: string[];
    // private /*not mapped: */ getUsernames(): string[];
    isLockedOn(playerEntity: AbstractClientPlayer): boolean;
}