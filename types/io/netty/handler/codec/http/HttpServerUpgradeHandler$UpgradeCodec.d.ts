import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface HttpServerUpgradeHandler$UpgradeCodec extends Object{
    prepareUpgradeResponse(arg0: ChannelHandlerContext, arg1: FullHttpRequest, arg2: Map$Entry<string, string>[]): boolean;
    requiredUpgradeHeaders(): E[];
    upgradeTo(arg0: ChannelHandlerContext, arg1: FullHttpRequest): void;
}