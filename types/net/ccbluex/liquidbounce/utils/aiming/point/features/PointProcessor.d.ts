import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
export abstract class PointProcessor extends ToggleableValueGroup {
    constructor(parent: EventListener, name: string, enabled: boolean)
    process(point: PointInsideBox): PointInsideBox;
}