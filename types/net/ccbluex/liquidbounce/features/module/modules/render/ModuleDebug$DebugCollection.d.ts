import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
export class ModuleDebug$DebugCollection extends Object implements ModuleDebug$DebuggedGeometry {
    constructor(geometry: E[])
    readonly geometry: E[];
    render(env: WorldRenderEnvironment): void;
}