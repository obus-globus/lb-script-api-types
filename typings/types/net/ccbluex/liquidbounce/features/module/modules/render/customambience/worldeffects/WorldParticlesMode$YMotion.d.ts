import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { WorldParticlesMode$AnimBy } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/worldeffects/WorldParticlesMode$AnimBy.d.ts'
export class WorldParticlesMode$YMotion extends ToggleableValueGroup {
    constructor()
    readonly animBy: WorldParticlesMode$AnimBy;
    readonly motion: number;
}