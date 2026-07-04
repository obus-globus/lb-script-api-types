import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { RenderDrawKey } from '../../../../../net/ccbluex/liquidbounce/render/engine/RenderDrawKey.d.ts'
import type { MeshDraw } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw.d.ts'
export class BatchCollector$BuiltDraw extends Object implements Comparable<BatchCollector$BuiltDraw> {
    constructor(key: RenderDrawKey, meshDraw: MeshDraw, order: number)
    readonly key: RenderDrawKey;
    readonly meshDraw: MeshDraw;
    readonly order: number;
    compareTo(other: BatchCollector$BuiltDraw): number;
    component1(): RenderDrawKey;
    component2(): MeshDraw;
    component3(): number;
    copy(key: RenderDrawKey, meshDraw: MeshDraw, order: number): BatchCollector$BuiltDraw;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}