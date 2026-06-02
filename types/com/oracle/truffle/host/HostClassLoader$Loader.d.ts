import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { HostClassLoader$Resource } from '../../../../com/oracle/truffle/host/HostClassLoader$Resource.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { ProtectionDomain } from '../../../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostClassLoader$Loader extends Object implements Closeable {
    constructor(root: TruffleFile)
    // private protectionDomain: ProtectionDomain;
    // private root: TruffleFile;
    findResource(name: string): HostClassLoader$Resource;
}