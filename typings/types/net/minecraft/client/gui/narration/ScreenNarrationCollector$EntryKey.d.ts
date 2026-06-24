import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NarratedElementType } from '../../../../../net/minecraft/client/gui/narration/NarratedElementType.d.ts'
export class ScreenNarrationCollector$EntryKey extends Record {
    private constructor(type: NarratedElementType, depth: number)
    // private depth: number;
    // private type: NarratedElementType;
    depth(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): NarratedElementType;
}