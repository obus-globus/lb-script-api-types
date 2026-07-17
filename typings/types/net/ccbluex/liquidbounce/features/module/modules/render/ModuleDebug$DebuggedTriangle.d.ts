import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleDebug$DebuggedTriangle extends Object implements ModuleDebug$DebuggedGeometry {
    constructor(p1: Vec3, p2: Vec3, p3: Vec3, color: Color4b)
    readonly color: Color4b;
    readonly p1: Vec3;
    readonly p2: Vec3;
    readonly p3: Vec3;
}