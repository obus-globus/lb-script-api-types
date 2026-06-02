import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class KillAuraFailSwing extends ToggleableValueGroup {
    static INSTANCE: KillAuraFailSwing;
    // private additionalRange: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getAdditionalRange(): ClosedFloatingPointRange<number>;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private currentAdditionalRange: number;
    readonly mode: ModeValueGroup<Mode>;
    dealWithFakeSwing(target: Entity | null): void;
}