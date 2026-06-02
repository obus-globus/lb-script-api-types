import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModPackResources } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { SortableNode } from '../../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
export class ModPackResourcesSorter$LoadPhaseData extends SortableNode<ModPackResourcesSorter$LoadPhaseData> {
    static link(paramarg0: Object | null, paramarg1: Object | null): void;
    constructor(arg0: string)
    // private modId: string;
    // private packs: ModPackResources[];
    addPack(arg0: ModPackResources): void;
    getDescription(): string;
}