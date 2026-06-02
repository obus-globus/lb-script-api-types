import type { LibKstat$Kstat } from '../../../../../com/sun/jna/platform/unix/solaris/LibKstat$Kstat.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KstatUtil$KstatChain } from '../../../../../oshi/util/platform/unix/solaris/KstatUtil$KstatChain.d.ts'
export class KstatUtil extends Object {
    static dataLookupLong(paramarg0: LibKstat$Kstat, paramarg1: string): number;
    static dataLookupString(paramarg0: LibKstat$Kstat, paramarg1: string): string;
    static openChain(): KstatUtil$KstatChain;
    static queryKstat2(paramarg0: string, paramarg1: (Object | null)[]): (Object | null)[];
    static queryKstat2List(paramarg0: string, paramarg1: string, paramarg2: (Object | null)[]): (Object | null)[][];
    private constructor()
}