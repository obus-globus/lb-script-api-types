import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2PromisedRequestVerifier extends Object{
    isAuthoritative(arg0: ChannelHandlerContext, arg1: (Object | null)[]): boolean;
    isCacheable(arg0: (Object | null)[]): boolean;
    isSafe(arg0: (Object | null)[]): boolean;
}