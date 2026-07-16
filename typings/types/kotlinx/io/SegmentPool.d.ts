import type { AtomicReferenceArray } from '../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
import type { SegmentCopyTracker } from '../../kotlinx/io/SegmentCopyTracker.d.ts'
export class SegmentPool extends Object {
    static INSTANCE: SegmentPool;
    static recycle(segment: Segment): void;
    static take(): Segment;
    static tracker(): SegmentCopyTracker;
    // private DEFAULT_SECOND_LEVEL_POOL_TOTAL_SIZE: string;
    // private HASH_BUCKET_COUNT: number;
    /*not mapped: */ getHASH_BUCKET_COUNT$kotlinx_io_core(): number;
    // private HASH_BUCKET_COUNT_L2: number;
    // private LOCK: Segment;
    readonly MAX_SIZE: number;
    // private SECOND_LEVEL_POOL_BUCKET_SIZE: number;
    // private SECOND_LEVEL_POOL_TOTAL_SIZE: number;
    /*not mapped: */ getSECOND_LEVEL_POOL_TOTAL_SIZE$kotlinx_io_core(): number;
    readonly byteCount: number;
    // private hashBuckets: AtomicReferenceArray<Segment>;
    // private hashBucketsL2: AtomicReferenceArray<Segment>;
    // private bucketId(mask: number): number;
    // private l1BucketId(): number;
    // private l2BucketId(): number;
    recycle(segment: Segment): void;
    // private recycleL2(segment: Segment): void;
    take(): Segment;
    // private takeL2(): Segment;
    tracker(): SegmentCopyTracker;
}