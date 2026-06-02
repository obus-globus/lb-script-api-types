import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
export class ModuleSmartEat$AutoEat extends ToggleableValueGroup {
    static INSTANCE: ModuleSmartEat$AutoEat;
    // private forceUseKey: boolean;
    // private keyBindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
    // private minHunger: number;
    // private /*not mapped: */ getMinHunger(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    eat(): void;
    onDisabled(): void;
}