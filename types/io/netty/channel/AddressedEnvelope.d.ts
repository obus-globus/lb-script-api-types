import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AddressedEnvelope<M extends Object | number | string | boolean, A extends SocketAddress> extends ReferenceCounted, Object{
    content(): M;
    recipient(): A;
    retain(): AddressedEnvelope<M, A>;
    retain(arg0: number): AddressedEnvelope<M, A>;
    sender(): A;
    touch(): AddressedEnvelope<M, A>;
    touch(arg0: Object): AddressedEnvelope<M, A>;
}