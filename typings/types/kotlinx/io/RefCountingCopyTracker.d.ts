import type { RefCountingCopyTracker$Companion } from '../../kotlinx/io/RefCountingCopyTracker$Companion.d.ts'
import type { SegmentCopyTracker } from '../../kotlinx/io/SegmentCopyTracker.d.ts'
export class RefCountingCopyTracker extends SegmentCopyTracker {
    static Companion: RefCountingCopyTracker$Companion;
    constructor()
    // private copyCount: number;
    readonly shared: boolean;
    addCopy(): void;
    removeCopy(): boolean;
}