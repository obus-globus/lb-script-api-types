import type { SegmentCopyTracker } from '../../kotlinx/io/SegmentCopyTracker.d.ts'
export class AlwaysSharedCopyTracker extends SegmentCopyTracker {
    static INSTANCE: AlwaysSharedCopyTracker;
    readonly shared: boolean;
    addCopy(): void;
    removeCopy(): boolean;
}