import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleDebug$DebuggedLineSegment extends Object implements ModuleDebug$DebuggedGeometry {
    constructor(from: Vec3, to: Vec3, color: Color4b)
    readonly color: Color4b;
    readonly from: Vec3;
    readonly to: Vec3;
}