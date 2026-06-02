import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModPackResources } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { ModPackResourcesSorter$LoadPhaseData } from '../../../../../../net/fabricmc/fabric/impl/resource/pack/ModPackResourcesSorter$LoadPhaseData.d.ts'
import type { ModPackResourcesUtil$Order } from '../../../../../../net/fabricmc/fabric/impl/resource/pack/ModPackResourcesUtil$Order.d.ts'
export class ModPackResourcesSorter extends Object {
    constructor()
    // private lock: Object;
    readonly packs: ModPackResources[];
    // private phases: { [key: string]: ModPackResourcesSorter$LoadPhaseData };
    // private sortedPhases: ModPackResourcesSorter$LoadPhaseData[];
    addLoadOrdering(arg0: string, arg1: string, arg2: ModPackResourcesUtil$Order): void;
    addPack(arg0: ModPackResources): void;
    // private getOrCreatePhase(arg0: string, arg1: boolean): ModPackResourcesSorter$LoadPhaseData;
    getPacks(): ModPackResources[];
    // private rebuildPackList(arg0: number): void;
}