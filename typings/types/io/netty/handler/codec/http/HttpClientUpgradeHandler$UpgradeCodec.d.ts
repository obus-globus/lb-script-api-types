import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface HttpClientUpgradeHandler$UpgradeCodec extends Object{
    protocol(): CharSequence;
    setUpgradeHeaders(arg0: ChannelHandlerContext, arg1: HttpRequest): CharSequence[];
    upgradeTo(arg0: ChannelHandlerContext, arg1: FullHttpResponse): void;
}