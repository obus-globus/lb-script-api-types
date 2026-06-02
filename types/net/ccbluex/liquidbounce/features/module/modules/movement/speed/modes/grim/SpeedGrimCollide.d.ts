import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { Entity } from '../../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class SpeedGrimCollide extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
    // private shrinkBox: number;
    // private /*not mapped: */ getShrinkBox(): number;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private tickHandler: EventHook<PlayerTickEvent>;
    // private canCauseSpeed(entity: Entity): boolean;
}