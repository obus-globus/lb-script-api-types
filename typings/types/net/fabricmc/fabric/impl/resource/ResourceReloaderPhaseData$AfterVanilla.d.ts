import type { SortableNode } from '../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
import type { ResourceReloaderPhaseData } from '../../../../../net/fabricmc/fabric/impl/resource/ResourceReloaderPhaseData.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceReloaderPhaseData$AfterVanilla extends ResourceReloaderPhaseData {
    static link<N extends SortableNode<N>>(paramarg0: N, paramarg1: N): void;
    constructor(arg0: Identifier)
    markAfter(): void;
    markBefore(): void;
}