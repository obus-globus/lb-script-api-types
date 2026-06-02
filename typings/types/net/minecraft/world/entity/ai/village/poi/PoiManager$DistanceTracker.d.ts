import type { SectionTracker } from '../../../../../../../net/minecraft/server/level/SectionTracker.d.ts'
export class PoiManager$DistanceTracker extends SectionTracker {
    static SOURCE: number;
    constructor(null_: PoiManager$DistanceTracker)
    // private levels: Long2ByteMap;
    getLevel(node: number): number;
    getLevelFromSource(to: number): number;
    runAllUpdates(): void;
    setLevel(node: number, level: number): void;
}