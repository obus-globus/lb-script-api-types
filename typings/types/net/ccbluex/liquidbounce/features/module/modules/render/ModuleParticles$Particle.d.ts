import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BuiltinParticle } from '../../../../../../../net/ccbluex/liquidbounce/render/BuiltinParticle.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleParticles$Particle extends Object {
    constructor(pos: Vec3, builtinParticle: BuiltinParticle)
    alpha: number;
    readonly builtinParticle: BuiltinParticle;
    // private collisionTime: number;
    pos: Vec3;
    // private prevPos: Vec3;
    // private rotation: number;
    // private spawnTime: number;
    // private velocity: Vec3;
    visible: boolean;
    render(env: WorldRenderEnvironment, partialTicks: number): void;
    update(cameraPos: Vec3): void;
}