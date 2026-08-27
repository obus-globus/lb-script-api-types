import type { InetAddress } from '../java/net/InetAddress.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Dns$Call } from '../okhttp3/Dns$Call.d.ts'
import type { Dns$Request } from '../okhttp3/Dns$Request.d.ts'
export interface Dns extends Object{
    lookup(hostname: string): InetAddress[];
    newCall(request: Dns$Request): Dns$Call;
}