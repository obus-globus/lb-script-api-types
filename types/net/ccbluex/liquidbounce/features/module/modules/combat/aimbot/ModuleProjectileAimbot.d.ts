import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TargetSelector } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetSelector.d.ts'
export class ModuleProjectileAimbot extends ClientModule {
    static INSTANCE: ModuleProjectileAimbot;
    // private rotations: RotationsValueGroup;
    // private targetSelector: TargetSelector;
    // private tickHandler: EventHook<GameTickEvent>;
}