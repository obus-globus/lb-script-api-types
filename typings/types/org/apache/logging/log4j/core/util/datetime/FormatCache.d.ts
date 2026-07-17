import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Format } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/Format.d.ts'
import type { FormatCache$MultipartKey } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FormatCache$MultipartKey.d.ts'
export abstract class FormatCache<F extends Format> extends Object {
    constructor()
    // private cInstanceCache: JavaMap<FormatCache$MultipartKey, F>;
    createInstance(pattern: string, timeZone: TimeZone, locale: Locale): F;
    getDateInstance(dateStyle: number, timeZone: TimeZone, locale: Locale): F;
    // private getDateTimeInstance(dateStyle: number, timeStyle: number, timeZone: TimeZone, locale: Locale): F;
    getDateTimeInstance(dateStyle: number, timeStyle: number, timeZone: TimeZone, locale: Locale): F;
    getInstance(): F;
    getInstance(pattern: string, timeZone: TimeZone, locale: Locale): F;
    getTimeInstance(timeStyle: number, timeZone: TimeZone, locale: Locale): F;
}