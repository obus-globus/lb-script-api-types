import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OlsonTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/OlsonTimeZone.d.ts'
import type { Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { SimpleTimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/SimpleTimeZone.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class ZoneMeta extends Object {
    static countEquivalentIDs(paramid: string): number;
    static getAvailableIDs(paramtype: TimeZone$SystemTimeZoneType, paramregion: string, paramrawOffset: number): string[];
    static getCanonicalCLDRID(paramtzid: string): string;
    static getCanonicalCLDRID(paramtz: TimeZone): string;
    static getCanonicalCountry(paramtzid: string): string;
    static getCanonicalCountry(paramtzid: string, paramisPrimary: Output<boolean>): string;
    static getCustomID(paramid: string): string;
    static getCustomTimeZone(paramoffset: number): SimpleTimeZone;
    static getCustomTimeZone(paramid: string): SimpleTimeZone;
    static getEquivalentID(paramid: string, paramindex: number): string;
    static getIanaID(paramtzid: string): string;
    static getRegion(paramtzid: string): string;
    static getShortID(paramid: string): string;
    static getShortID(paramtz: TimeZone): string;
    static getSystemTimeZone(paramid: string): OlsonTimeZone;
    static openOlsonResource(paramtop: UResourceBundle, paramid: string): UResourceBundle;
    constructor()
}