import type { LocalizedSegmenter$SegmentationType } from '../../../../com/ibm/icu/segmenter/LocalizedSegmenter$SegmentationType.d.ts'
import type { Segmenter } from '../../../../com/ibm/icu/segmenter/Segmenter.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalizedSegmenter$Builder extends Object {
    private constructor()
    // private locale: ULocale;
    // private segmentationType: LocalizedSegmenter$SegmentationType;
    build(): Segmenter;
    setLocale(arg0: ULocale): LocalizedSegmenter$Builder;
    setLocale(arg0: Locale): LocalizedSegmenter$Builder;
    setSegmentationType(arg0: LocalizedSegmenter$SegmentationType): LocalizedSegmenter$Builder;
}