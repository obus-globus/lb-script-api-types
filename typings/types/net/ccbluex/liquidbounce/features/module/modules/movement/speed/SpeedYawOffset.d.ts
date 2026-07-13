import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { SpeedYawOffset$YawOffsetMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedYawOffset$YawOffsetMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Makes you go faster by strategically strafing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedYawOffset.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedYawOffset.kt:33}
 */
export class SpeedYawOffset extends ToggleableValueGroup {
    static INSTANCE: SpeedYawOffset;
    // private rotations: RotationsValueGroup;
    // private yaw: number;
    // private yawOffsetHandler: EventHook<RotationUpdateEvent>;
    // private yawOffsetMode: SpeedYawOffset$YawOffsetMode;
    // private /*not mapped: */ getYawOffsetMode(): SpeedYawOffset$YawOffsetMode;
    // private airYawOffset(): number;
    // private constantYawOffset(): number;
    // private groundYawOffset(): number;
}