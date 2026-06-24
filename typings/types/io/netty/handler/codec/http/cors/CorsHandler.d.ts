import type { ChannelDuplexHandler } from '../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { CorsConfig } from '../../../../../../io/netty/handler/codec/http/cors/CorsConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CorsHandler extends ChannelDuplexHandler {
    constructor(arg0: CorsConfig)
    constructor(arg0: CorsConfig[], arg1: boolean)
    // private config: CorsConfig;
    // private configList: CorsConfig[];
    // private consumeContent: boolean;
    // private isShortCircuit: boolean;
    // private request: HttpRequest;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private echoRequestOrigin(arg0: HttpResponse): void;
    // private getForOrigin(arg0: string): CorsConfig;
    // private handlePreflight(arg0: ChannelHandlerContext, arg1: HttpRequest): void;
    // private setAllowCredentials(arg0: HttpResponse): void;
    // private setAllowHeaders(arg0: HttpResponse): void;
    // private setAllowMethods(arg0: HttpResponse): void;
    // private setAllowPrivateNetwork(arg0: HttpResponse): void;
    // private setExposeHeaders(arg0: HttpResponse): void;
    // private setMaxAge(arg0: HttpResponse): void;
    // private setOrigin(arg0: HttpResponse): boolean;
    // private setPreflightHeaders(arg0: HttpResponse): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}