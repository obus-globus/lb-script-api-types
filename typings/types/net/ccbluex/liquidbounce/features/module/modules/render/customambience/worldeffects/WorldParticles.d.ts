import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { WorldParticlesSimple } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/worldeffects/modes/WorldParticlesSimple.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldParticles extends ToggleableValueGroup {
    static INSTANCE: WorldParticles;
    readonly coords: Vec3[];
    readonly modes: ModeValueGroup<WorldParticlesSimple>;
    getModes(): ModeValueGroup<WorldParticlesSimple>;
    onDisabled(): void;
}