import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocalizedSegmenter$SegmentationType extends Enum<LocalizedSegmenter$SegmentationType> {
    static GRAPHEME_CLUSTER: LocalizedSegmenter$SegmentationType;
    static LINE: LocalizedSegmenter$SegmentationType;
    static SENTENCE: LocalizedSegmenter$SegmentationType;
    static WORD: LocalizedSegmenter$SegmentationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocalizedSegmenter$SegmentationType;
    static values(): (Object | null)[];
    private constructor()
    name(): "GRAPHEME_CLUSTER" | "WORD" | "LINE" | "SENTENCE";
}