import type { SectionTracker } from '../../../../../../../net/minecraft/server/level/SectionTracker.d.ts'
import type { PoiManager } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
export class PoiManager$DistanceTracker extends SectionTracker {
    static SOURCE: number;
    constructor(null_: PoiManager)
    // private levels: { [key: string]: any };
    getLevel(node: number): number;
    getLevelFromSource(to: number): number;
    runAllUpdates(): void;
    setLevel(node: number, level: number): void;
}