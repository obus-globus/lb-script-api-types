import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { EntityTargetingInfo } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTargetingInfo.d.ts'
export class EntityTag extends Object {
    constructor(targetingInfo: EntityTargetingInfo, color: Color4b | null)
    readonly color: Color4b | null;
    readonly targetingInfo: EntityTargetingInfo;
}