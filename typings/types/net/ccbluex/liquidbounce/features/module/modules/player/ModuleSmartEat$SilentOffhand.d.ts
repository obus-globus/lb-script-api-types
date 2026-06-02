import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerInteractedItemEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerInteractedItemEvent.d.ts'
export class ModuleSmartEat$SilentOffhand extends ToggleableValueGroup {
    static INSTANCE: ModuleSmartEat$SilentOffhand;
    // private interactionHandler: EventHook<PlayerInteractedItemEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
}