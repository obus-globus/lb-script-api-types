import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ModuleDebug$DebuggedBox extends Object implements ModuleDebug$DebuggedGeometry {
    constructor(box: AABB, color: Color4b)
    readonly box: AABB;
    readonly color: Color4b;
}