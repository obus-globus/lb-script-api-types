import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
export class Screen$NarratableSearchResult extends Record {
    // private entry: NarratableEntry;
    // private index: number;
    // private priority: NarratableEntry$NarrationPriority;
    entry(): NarratableEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    priority(): NarratableEntry$NarrationPriority;
    toString(): string;
}