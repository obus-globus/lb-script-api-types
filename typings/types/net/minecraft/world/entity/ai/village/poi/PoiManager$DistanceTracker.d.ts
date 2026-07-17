import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { SectionTracker } from '../../../../../../../net/minecraft/server/level/SectionTracker.d.ts'
import type { PoiManager } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
export class PoiManager$DistanceTracker extends SectionTracker {
    static SOURCE: number;
    constructor(null_: PoiManager)
    // private levels: JavaMap<any, any>;
    getLevel(node: number): number;
    getLevelFromSource(to: number): number;
    runAllUpdates(): void;
    setLevel(node: number, level: number): void;
}