import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BlockedServers extends Object implements Predicate<string> {
    static HASH_CHARSET: Charset;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor(arg0: string[])
    // private blockedServers: string[];
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    // private isBlockedServerHostName(arg0: string): boolean;
    negate(): (param0: string) => boolean;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    test(arg0: string): boolean;
}