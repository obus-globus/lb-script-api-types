import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalizedSegmenter$SegmentationType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/LocalizedSegmenter$SegmentationType.d.ts'
import type { Segmenter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segmenter.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocalizedSegmenter$Builder extends Object {
    private constructor()
    // private locale: ULocale;
    // private segmentationType: LocalizedSegmenter$SegmentationType;
    build(): Segmenter;
    setLocale(locale: Locale): LocalizedSegmenter$Builder;
    setLocale(locale: ULocale): LocalizedSegmenter$Builder;
    setSegmentationType(segmentationType: LocalizedSegmenter$SegmentationType): LocalizedSegmenter$Builder;
}