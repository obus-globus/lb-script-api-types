import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ExemptContext } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptContext.d.ts'
import type { ExemptPoint } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptPoint.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ExemptBestHitVector extends ToggleableValueGroup implements ExemptPoint {
    constructor(parent: EventListener)
    // private horizontal: number;
    // private /*not mapped: */ getHorizontal(): number;
    // private vertical: number;
    // private /*not mapped: */ getVertical(): number;
    predicate(context: ExemptContext, point: Vec3): boolean;
}