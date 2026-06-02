import type { DynamicGraphMinFixedPoint } from '../../../../net/minecraft/world/level/lighting/DynamicGraphMinFixedPoint.d.ts'
export abstract class SectionTracker extends DynamicGraphMinFixedPoint {
    static SOURCE: number;
    constructor(levelCount: number, minQueueSize: number, minMapSize: number)
    checkNeighborsAfterUpdate(node: number, level: number, onlyDecrease: boolean): void;
    computeLevelFromNeighbor(from: number, to: number, fromLevel: number): number;
    getComputedLevel(node: number, knownParent: number, knownLevelFromParent: number): number;
    getLevelFromSource(to: number): number;
    update(node: number, newLevelFrom: number, onlyDecreased: boolean): void;
}