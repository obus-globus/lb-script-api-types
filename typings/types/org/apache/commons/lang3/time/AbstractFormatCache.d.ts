import type { Format } from '../../../../../java/text/Format.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFormatCache$ArrayKey } from '../../../../../org/apache/commons/lang3/time/AbstractFormatCache$ArrayKey.d.ts'
export abstract class AbstractFormatCache<F extends Format> extends Object {
    constructor()
    // private instanceCache: Map<AbstractFormatCache$ArrayKey, F>;
    clearInstance(): void;
    createInstance(arg0: string, arg1: TimeZone, arg2: Locale): F;
    getDateInstance(arg0: number, arg1: TimeZone, arg2: Locale): F;
    // private getDateTimeInstance(arg0: number, arg1: number, arg2: TimeZone, arg3: Locale): F;
    getDateTimeInstance(arg0: number, arg1: number, arg2: TimeZone, arg3: Locale): F;
    getInstance(): F;
    getInstance(arg0: string, arg1: TimeZone, arg2: Locale): F;
    getTimeInstance(arg0: number, arg1: TimeZone, arg2: Locale): F;
}