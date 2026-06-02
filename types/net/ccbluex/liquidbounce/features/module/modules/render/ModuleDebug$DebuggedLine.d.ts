import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Line } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleDebug$DebuggedLine extends Object implements ModuleDebug$DebuggedGeometry {
    constructor(line: Line, color: Color4b)
    readonly color: Color4b;
    readonly from: Vec3;
    readonly to: Vec3;
    render(env: WorldRenderEnvironment): void;
}