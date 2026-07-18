import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerSafeWalkEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerSafeWalkEvent.d.ts'
export class ScaffoldDownFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldDownFeature;
    readonly handleMoveInput: EventHook<MovementInputEvent>;
    readonly handleSafeWalk: EventHook<PlayerSafeWalkEvent>;
    readonly shouldGoDown: boolean;
    /**
     * When we are using the down scaffold, we want to jump down on the next block in some situations
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldDownFeature.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldDownFeature.kt:50}
     */
    shouldFallOffBlock(): boolean;
}