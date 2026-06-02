import type { OlsonTimeZone } from '../../../../com/ibm/icu/impl/OlsonTimeZone.d.ts'
import type { Output } from '../../../../com/ibm/icu/util/Output.d.ts'
import type { SimpleTimeZone } from '../../../../com/ibm/icu/util/SimpleTimeZone.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { TimeZone$SystemTimeZoneType } from '../../../../com/ibm/icu/util/TimeZone$SystemTimeZoneType.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ZoneMeta extends Object {
    static countEquivalentIDs(paramarg0: string): number;
    static getAvailableIDs(paramarg0: TimeZone$SystemTimeZoneType, paramarg1: string, paramarg2: number): string[];
    static getCanonicalCLDRID(paramarg0: TimeZone): string;
    static getCanonicalCLDRID(paramarg0: string): string;
    static getCanonicalCountry(paramarg0: string): string;
    static getCanonicalCountry(paramarg0: string, paramarg1: Output<boolean>): string;
    static getCustomID(paramarg0: string): string;
    static getCustomTimeZone(paramarg0: number): SimpleTimeZone;
    static getCustomTimeZone(paramarg0: string): SimpleTimeZone;
    static getEquivalentID(paramarg0: string, paramarg1: number): string;
    static getIanaID(paramarg0: string): string;
    static getRegion(paramarg0: string): string;
    static getShortID(paramarg0: TimeZone): string;
    static getShortID(paramarg0: string): string;
    static getSystemTimeZone(paramarg0: string): OlsonTimeZone;
    static openOlsonResource(paramarg0: UResourceBundle, paramarg1: string): UResourceBundle;
    constructor()
}