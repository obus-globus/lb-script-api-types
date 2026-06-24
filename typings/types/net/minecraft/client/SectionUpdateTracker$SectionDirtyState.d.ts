import type { Object } from '../../../java/lang/Object.d.ts'
import type { RotatingSectionStorage$Value } from '../../../net/minecraft/client/RotatingSectionStorage$Value.d.ts'
export class SectionUpdateTracker$SectionDirtyState extends Object implements RotatingSectionStorage$Value {
    private constructor(isDirty: boolean, isDirtyFromPlayer: boolean, sectionNode: number)
    // private isDirty: boolean;
    // private isDirtyFromPlayer: boolean;
    readonly sectionNode: number;
    getSectionNode(): number;
    isDirty(): boolean;
    isDirtyFromPlayer(): boolean;
    setDirty(fromPlayer: boolean): void;
    setNotDirty(): void;
    setSectionNode(sectionNode: number): void;
}