import type { KstatUtil$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { LibKstat$Kstat } from '../../../../../com/sun/jna/platform/unix/solaris/LibKstat$Kstat.d.ts'
import type { LibKstat$KstatCtl } from '../../../../../com/sun/jna/platform/unix/solaris/LibKstat$KstatCtl.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class KstatUtil$KstatChain extends Object implements AutoCloseable {
    private constructor(arg0: LibKstat$KstatCtl)
    constructor(arg0: LibKstat$KstatCtl, arg1: KstatUtil$1)
    // private localCtlRef: LibKstat$KstatCtl;
    close(): void;
    lookup(arg0: string, arg1: number, arg2: string): LibKstat$Kstat;
    lookupAll(arg0: string, arg1: number, arg2: string): LibKstat$Kstat[];
    read(arg0: LibKstat$Kstat): boolean;
    update(): number;
}