import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SegmentCopyTracker extends Object {
    constructor()
    readonly shared: boolean;
    addCopy(): void;
    removeCopy(): boolean;
}