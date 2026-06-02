import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { DroneControlScreen } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/DroneControlScreen.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleDroneControl extends ClientModule {
    static INSTANCE: ModuleDroneControl;
    currentTarget: Pair<Entity, Vec3> | null;
    mayShoot: boolean;
    // private repeatable: EventHook<GameTickEvent>;
    // private rotations: RotationsValueGroup;
    screen: DroneControlScreen | null;
    onDisabled(): void;
    onEnabled(): void;
}