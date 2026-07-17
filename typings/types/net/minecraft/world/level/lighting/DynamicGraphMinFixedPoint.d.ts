import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LongPredicate } from '../../../../../java/util/function/LongPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LeveledPriorityQueue } from '../../../../../net/minecraft/world/level/lighting/LeveledPriorityQueue.d.ts'
export abstract class DynamicGraphMinFixedPoint extends Object {
    static SOURCE: number;
    constructor(levelCount: number, minQueueSize: number, minMapSize: number)
    // private computedLevels: JavaMap<any, any>;
    // private hasWork: boolean;
    // private levelCount: number;
    // private priorityQueue: LeveledPriorityQueue;
    // private calculatePriority(level: number, computedLevel: number): number;
    checkEdge(from: number, to: number, newLevelFrom: number, onlyDecreased: boolean): void;
    // private checkEdge(from: number, to: number, newLevelFrom: number, levelTo: number, oldComputedLevel: number, onlyDecreased: boolean): void;
    checkNeighbor(from: number, to: number, level: number, onlyDecreased: boolean): void;
    checkNeighborsAfterUpdate(node: number, level: number, onlyDecrease: boolean): void;
    checkNode(node: number): void;
    computeLevelFromNeighbor(from: number, to: number, fromLevel: number): number;
    getComputedLevel(node: number, knownParent: number, knownLevelFromParent: number): number;
    getLevel(node: number): number;
    getQueueSize(): number;
    hasWork(): boolean;
    isSource(node: number): boolean;
    removeFromQueue(node: number): void;
    removeIf(pred: (param0: number) => boolean): void;
    runUpdates(count: number): number;
    setLevel(node: number, level: number): void;
}