import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { WorldParticlesColorSettings } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/worldeffects/WorldParticlesColorSettings.d.ts'
import type { WorldParticlesMode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/worldeffects/WorldParticlesMode.d.ts'
import type { BuiltinParticle } from '../../../../../../../../../../net/ccbluex/liquidbounce/render/BuiltinParticle.d.ts'
export class WorldParticlesSimple extends WorldParticlesMode {
    static Companion: Tagged$Companion;
    static INSTANCE: WorldParticlesSimple;
    // private builtinParticles: BuiltinParticle;
    // private /*not mapped: */ getBuiltinParticles(): BuiltinParticle;
    // private color: WorldParticlesColorSettings;
    protected createParticleCoord(currentTime: number): void;
}