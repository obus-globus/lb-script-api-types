import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Dns } from '../../../okhttp3/Dns.d.ts'
import type { Dns$Call } from '../../../okhttp3/Dns$Call.d.ts'
import type { Dns$Companion } from '../../../okhttp3/Dns$Companion.d.ts'
import type { Dns$Request } from '../../../okhttp3/Dns$Request.d.ts'
export class InetAddressDns extends Object implements Dns {
    static Companion: Dns$Companion;
    static INSTANCE: InetAddressDns;
    static SYSTEM: Dns;
    lookup(hostname: string): InetAddress[];
    newCall(request: Dns$Request): Dns$Call;
}