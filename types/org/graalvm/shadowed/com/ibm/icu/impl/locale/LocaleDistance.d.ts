import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LSR } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleDistance$Data } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleDistance$Data.d.ts'
import type { BytesTrie$Entry } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { LocaleMatcher$Direction } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDistance extends Object {
    static DISTANCE_SKIP_SCRIPT: number;
    static END_OF_SUBTAG: number;
    static INSTANCE: LocaleDistance;
    static IX_DEF_LANG_DISTANCE: number;
    static IX_DEF_REGION_DISTANCE: number;
    static IX_DEF_SCRIPT_DISTANCE: number;
    static IX_LIMIT: number;
    static IX_MIN_REGION_DISTANCE: number;
    static getDistanceDouble(paramindexAndDistance: number): number;
    static getDistanceFloor(paramindexAndDistance: number): number;
    static getIndex(paramindexAndDistance: number): number;
    static getShiftedDistance(paramindexAndDistance: number): number;
    static shiftDistance(paramdistance: number): number;
    private constructor(data: LocaleDistance$Data)
    readonly defaultDemotionPerDesiredLocale: number;
    // private defaultLanguageDistance: number;
    // private defaultRegionDistance: number;
    readonly defaultScriptDistance: number;
    // private minRegionDistance: number;
    // private paradigmLSRs: LSR[];
    // private partitionArrays: string[];
    // private regionToPartitionsIndex: number[];
    // private trie: BytesTrie$Entry[];
    getBestIndexAndDistance(desired: LSR, supportedLSRs: LSR[], supportedLSRsLength: number, shiftedThreshold: number, favorSubtag: LocaleMatcher$FavorSubtag, direction: LocaleMatcher$Direction): number;
    getDefaultDemotionPerDesiredLocale(): number;
    getDefaultRegionDistance(): number;
    getDefaultScriptDistance(): number;
    // private isMatch(desired: LSR, supported: LSR, shiftedThreshold: number, favorSubtag: LocaleMatcher$FavorSubtag): boolean;
    isParadigmLSR(lsr: LSR): boolean;
    // private partitionsForRegion(lsr: LSR): string;
    testOnlyDistance(desired: ULocale, supported: ULocale, threshold: number, favorSubtag: LocaleMatcher$FavorSubtag): number;
    testOnlyGetDistanceTable(): { [key: string]: number };
    testOnlyPrintDistanceTable(): void;
    toString(): string;
}