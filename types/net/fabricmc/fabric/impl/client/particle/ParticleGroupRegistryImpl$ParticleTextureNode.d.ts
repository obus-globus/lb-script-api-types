import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SortableNode } from '../../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
import type { ParticleRenderType } from '../../../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ParticleGroupRegistryImpl$ParticleTextureNode extends SortableNode<ParticleGroupRegistryImpl$ParticleTextureNode> {
    static link(paramarg0: Object | null, paramarg1: Object | null): void;
    private constructor(arg0: ParticleRenderType)
    private constructor(arg0: Identifier, arg1: ParticleRenderType)
    // private id: Identifier;
    // private renderType: ParticleRenderType;
    getDescription(): string;
}