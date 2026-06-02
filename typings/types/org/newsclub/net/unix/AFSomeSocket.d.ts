import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSomeSocketThing } from '../../../../org/newsclub/net/unix/AFSomeSocketThing.d.ts'
export interface AFSomeSocket extends Object, AFSomeSocketThing{
    getRemoteSocketAddress(): SocketAddress;
}