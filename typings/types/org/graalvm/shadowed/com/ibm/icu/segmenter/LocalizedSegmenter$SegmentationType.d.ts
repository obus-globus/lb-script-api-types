import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocalizedSegmenter$SegmentationType extends Enum<LocalizedSegmenter$SegmentationType> {
    static GRAPHEME_CLUSTER: LocalizedSegmenter$SegmentationType;
    static LINE: LocalizedSegmenter$SegmentationType;
    static SENTENCE: LocalizedSegmenter$SegmentationType;
    static WORD: LocalizedSegmenter$SegmentationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LocalizedSegmenter$SegmentationType;
    static values(): LocalizedSegmenter$SegmentationType[];
    private constructor()
    name(): "GRAPHEME_CLUSTER" | "WORD" | "LINE" | "SENTENCE";
}