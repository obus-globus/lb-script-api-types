import type { InetAddress } from '../../../../../../../java/net/InetAddress.d.ts'
import type { URI } from '../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DnsResolver extends Object{
    resolve(arg0: URI): InetAddress;
}