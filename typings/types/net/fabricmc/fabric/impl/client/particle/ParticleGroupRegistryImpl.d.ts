import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleGroupRegistryImpl$ParticleTextureNode } from '../../../../../../net/fabricmc/fabric/impl/client/particle/ParticleGroupRegistryImpl$ParticleTextureNode.d.ts'
import type { ParticleEngine } from '../../../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { ParticleGroup } from '../../../../../../net/minecraft/client/particle/ParticleGroup.d.ts'
import type { ParticleRenderType } from '../../../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ParticleGroupRegistryImpl extends Object {
    static INSTANCE: ParticleGroupRegistryImpl;
    constructor(arg0: ParticleRenderType[])
    // private factories: Map<ParticleRenderType, (param0: ParticleEngine) => ParticleGroup<any>>;
    // private nodes: Map<Identifier, ParticleGroupRegistryImpl$ParticleTextureNode>;
    // private renderTypes: ParticleRenderType[];
    getFactory(arg0: ParticleRenderType): (param0: ParticleEngine) => ParticleGroup<any>;
    getParticleRenderType(arg0: Identifier): ParticleRenderType;
    register(arg0: ParticleRenderType, arg1: (param0: ParticleEngine) => ParticleGroup<any>): void;
    registerOrdering(arg0: Identifier, arg1: Identifier): void;
    // private sort(): void;
}