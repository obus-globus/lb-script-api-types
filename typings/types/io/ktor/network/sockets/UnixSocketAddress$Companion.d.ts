import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnixSocketAddress$Companion extends Object {
    // private unixDomainSocketAddressClass: Class<Object> | null;
    checkSupportForUnixDomainSockets(): Class<Object>;
    isSupported(): boolean;
}