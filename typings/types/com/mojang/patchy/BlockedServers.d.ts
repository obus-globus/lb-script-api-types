import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BlockedServers extends Object implements Predicate<string> {
    static HASH_CHARSET: Charset;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(arg0: E[])
    // private blockedServers: string[];
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    // private isBlockedServerHostName(arg0: string): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(arg0: string): boolean;
}