import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ParticleEngine } from '../../../../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { ParticleGroup } from '../../../../../../../net/minecraft/client/particle/ParticleGroup.d.ts'
import type { ParticleRenderType } from '../../../../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ParticleGroupRegistry extends Object {
    static getId(paramarg0: ParticleRenderType): Identifier;
    static getParticleRenderType(paramarg0: Identifier): ParticleRenderType;
    static register(paramarg0: ParticleRenderType, paramarg1: (param0: ParticleEngine) => ParticleGroup<Object>): void;
    static registerOrdering(paramarg0: ParticleRenderType, paramarg1: ParticleRenderType): void;
    static registerOrdering(paramarg0: ParticleRenderType, paramarg1: Identifier): void;
    static registerOrdering(paramarg0: Identifier, paramarg1: ParticleRenderType): void;
    static registerOrdering(paramarg0: Identifier, paramarg1: Identifier): void;
    private constructor()
}