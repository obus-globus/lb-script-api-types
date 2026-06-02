import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { ReferenceCounted } from '../../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HttpServerUpgradeHandler$UpgradeEvent extends Object implements ReferenceCounted {
    constructor(arg0: CharSequence, arg1: FullHttpRequest)
    // private protocol: CharSequence;
    // private upgradeRequest: FullHttpRequest;
    protocol(): CharSequence;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): HttpServerUpgradeHandler$UpgradeEvent;
    retain(arg0: number): HttpServerUpgradeHandler$UpgradeEvent;
    toString(): string;
    touch(): HttpServerUpgradeHandler$UpgradeEvent;
    touch(arg0: Object): HttpServerUpgradeHandler$UpgradeEvent;
    upgradeRequest(): FullHttpRequest;
}