import type { ChannelDuplexHandler } from '../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AuthenticationHandler$SecurityCheckResult } from '../../../../../net/minecraft/server/jsonrpc/security/AuthenticationHandler$SecurityCheckResult.d.ts'
import type { SecurityConfig } from '../../../../../net/minecraft/server/jsonrpc/security/SecurityConfig.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class AuthenticationHandler extends ChannelDuplexHandler {
    static BEARER_PREFIX: string;
    constructor(securityConfig: SecurityConfig, allowedOrigins: string)
    // private LOGGER: Logger;
    // private allowedOrigins: string[];
    // private securityConfig: SecurityConfig;
    channelRead(context: ChannelHandlerContext, msg: Object): void;
    // private getClientIp(context: ChannelHandlerContext): string;
    // private isAllowedOriginHeader(request: HttpRequest): boolean;
    isValidApiKey(suppliedKey: string): boolean;
    // private parseTokenInAuthorizationHeader(request: HttpRequest): string;
    // private parseTokenInSecWebsocketProtocolHeader(request: HttpRequest): string;
    // private performSecurityChecks(request: HttpRequest): AuthenticationHandler$SecurityCheckResult;
    // private sendUnauthorizedResponse(context: ChannelHandlerContext, reason: string): void;
    write(ctx: ChannelHandlerContext, msg: Object, promise: ChannelPromise): void;
}