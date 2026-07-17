import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LSR } from '../../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleDistance$Data } from '../../../../../com/ibm/icu/impl/locale/LocaleDistance$Data.d.ts'
import type { BytesTrie$Entry } from '../../../../../com/ibm/icu/util/BytesTrie$Entry.d.ts'
import type { LocaleMatcher$Direction } from '../../../../../com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../../com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocaleDistance extends Object {
    static DISTANCE_SKIP_SCRIPT: number;
    static END_OF_SUBTAG: number;
    static INSTANCE: LocaleDistance;
    static IX_DEF_LANG_DISTANCE: number;
    static IX_DEF_REGION_DISTANCE: number;
    static IX_DEF_SCRIPT_DISTANCE: number;
    static IX_LIMIT: number;
    static IX_MIN_REGION_DISTANCE: number;
    static getDistanceDouble(paramarg0: number): number;
    static getDistanceFloor(paramarg0: number): number;
    static getIndex(paramarg0: number): number;
    static getShiftedDistance(paramarg0: number): number;
    static shiftDistance(paramarg0: number): number;
    private constructor(arg0: LocaleDistance$Data)
    readonly defaultDemotionPerDesiredLocale: number;
    // private defaultLanguageDistance: number;
    // private defaultRegionDistance: number;
    readonly defaultScriptDistance: number;
    // private minRegionDistance: number;
    // private paradigmLSRs: LSR[];
    // private partitionArrays: string[];
    // private regionToPartitionsIndex: number[];
    // private trie: BytesTrie$Entry[];
    getBestIndexAndDistance(arg0: LSR, arg1: LSR[], arg2: number, arg3: number, arg4: LocaleMatcher$FavorSubtag, arg5: LocaleMatcher$Direction): number;
    getDefaultDemotionPerDesiredLocale(): number;
    getDefaultRegionDistance(): number;
    getDefaultScriptDistance(): number;
    // private isMatch(arg0: LSR, arg1: LSR, arg2: number, arg3: LocaleMatcher$FavorSubtag): boolean;
    isParadigmLSR(arg0: LSR): boolean;
    // private partitionsForRegion(arg0: LSR): string;
    testOnlyDistance(arg0: ULocale, arg1: ULocale, arg2: number, arg3: LocaleMatcher$FavorSubtag): number;
    testOnlyGetDistanceTable(): JavaMap<string, number>;
    testOnlyPrintDistanceTable(): void;
    toString(): string;
}