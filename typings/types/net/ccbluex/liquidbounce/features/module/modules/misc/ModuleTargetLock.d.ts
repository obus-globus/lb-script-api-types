import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { TagEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTargetLock$LockMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock$LockMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
/**
 * TargetLock module
 *
 * Locks on to a target and prevents targeting other entities,
 * either {@link Temporary}ly on attack or by {@link Filter}ing by username.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleTargetLock.kt:36}
 */
export class ModuleTargetLock extends ClientModule {
    static INSTANCE: ModuleTargetLock;
    // private combatOnly: boolean;
    // private /*not mapped: */ getCombatOnly(): boolean;
    // private mode: ModeValueGroup<ModuleTargetLock$LockMode>;
    // private tagEntityEvent: EventHook<TagEntityEvent>;
    // private isLockedOn(entity: AbstractClientPlayer): boolean;
}