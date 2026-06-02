import type { AtomicReference } from '../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Segment } from '../okio/Segment.d.ts'
export class SegmentPool extends Object {
    static INSTANCE: SegmentPool;
    static recycle(paramarg0: Segment): void;
    static take(): Segment;
    // private HASH_BUCKET_COUNT: number;
    // private LOCK: Segment;
    readonly MAX_SIZE: number;
    readonly byteCount: number;
    // private hashBuckets: AtomicReference<Segment>[];
    // private firstRef(): AtomicReference<Segment>;
    recycle(segment: Segment): void;
    take(): Segment;
}