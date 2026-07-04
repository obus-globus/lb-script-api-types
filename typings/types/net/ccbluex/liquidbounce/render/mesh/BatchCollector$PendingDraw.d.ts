import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderDrawKey } from '../../../../../net/ccbluex/liquidbounce/render/engine/RenderDrawKey.d.ts'
export class BatchCollector$PendingDraw extends Object {
    constructor(key: RenderDrawKey, builder: BufferBuilder, order: number, readyToBuild: boolean)
    readonly builder: BufferBuilder;
    readonly key: RenderDrawKey;
    readonly order: number;
    readyToBuild: boolean;
    component1(): RenderDrawKey;
    component2(): BufferBuilder;
    component3(): number;
    component4(): boolean;
    copy(key: RenderDrawKey, builder: BufferBuilder, order: number, readyToBuild: boolean): BatchCollector$PendingDraw;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}