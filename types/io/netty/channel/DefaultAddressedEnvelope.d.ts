import type { AddressedEnvelope } from '../../../io/netty/channel/AddressedEnvelope.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultAddressedEnvelope<M extends Object | number | string | boolean, A extends SocketAddress> extends Object implements AddressedEnvelope<M, A> {
    constructor(arg0: M, arg1: A)
    constructor(arg0: M, arg1: A, arg2: A)
    // private message: M;
    // private recipient: A;
    // private sender: A;
    content(): M;
    recipient(): A;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): AddressedEnvelope<M, A>;
    retain(arg0: number): AddressedEnvelope<M, A>;
    sender(): A;
    toString(): string;
    touch(): AddressedEnvelope<M, A>;
    touch(arg0: Object): AddressedEnvelope<M, A>;
}