import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolSubpageMetric } from '../../../io/netty/buffer/PoolSubpageMetric.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PoolSubpage<T extends unknown> extends Object implements PoolSubpageMetric {
    constructor(arg0: PoolSubpage<T>, arg1: PoolChunk<T>, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: number)
    // private bitmap: number[];
    // private bitmapLength: number;
    // private chunk: PoolChunk<T>;
    // private doNotDestroy: boolean;
    // private elemSize: number;
    // private headIndex: number;
    // private lock: ReentrantLock;
    // private maxNumElems: number;
    // private next: PoolSubpage<T>;
    // private nextAvail: number;
    // private numAvail: number;
    // private pageShifts: number;
    // private prev: PoolSubpage<T>;
    // private runOffset: number;
    // private runSize: number;
    // private addToPool(arg0: PoolSubpage<T>): void;
    allocate(): number;
    destroy(): void;
    elementSize(): number;
    // private findNextAvail(): number;
    // private findNextAvail0(arg0: number, arg1: number): number;
    free(arg0: PoolSubpage<T>, arg1: number): boolean;
    // private getNextAvail(): number;
    isDoNotDestroy(): boolean;
    lock(): void;
    maxNumElements(): number;
    numAvailable(): number;
    pageSize(): number;
    // private removeFromPool(): void;
    // private setNextAvail(arg0: number): void;
    // private toHandle(arg0: number): number;
    toString(): string;
    unlock(): void;
}