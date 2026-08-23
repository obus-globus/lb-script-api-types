import type { ProxyHandler } from '../../../../../../io/netty/handler/proxy/ProxyHandler.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IpInfoApi$IpData } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi$IpData.d.ts'
import type { Proxy$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy$Companion.d.ts'
import type { Proxy$Credentials } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy$Credentials.d.ts'
import type { Proxy$Type } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy$Type.d.ts'
/**
 * Contains serializable proxy data
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/Proxy.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/Proxy.kt:29}
 */
export class Proxy extends Object {
    static Companion: Proxy$Companion;
    static credentials(username: string, password: string): Proxy$Credentials | null;
    constructor(host: string, port: number, credentials: Proxy$Credentials | null, type: Proxy$Type | null, forwardAuthentication: boolean, ipInfo: IpInfoApi$IpData | null, favorite: boolean)
    readonly address: InetSocketAddress;
    readonly credentials: Proxy$Credentials | null;
    getCredentials(): Proxy$Credentials | null;
    favorite: boolean;
    forwardAuthentication: boolean;
    readonly host: string;
    ipInfo: IpInfoApi$IpData | null;
    readonly port: number;
    readonly type: Proxy$Type | null;
    component1(): string;
    component2(): number;
    component3(): Proxy$Credentials | null;
    component4(): Proxy$Type | null;
    component5(): boolean;
    component6(): IpInfoApi$IpData | null;
    component7(): boolean;
    copy(host: string, port: number, credentials: Proxy$Credentials | null, type: Proxy$Type | null, forwardAuthentication: boolean, ipInfo: IpInfoApi$IpData | null, favorite: boolean): Proxy;
    equals(other: Object | null): boolean;
    handler(): ProxyHandler;
    hashCode(): number;
    toString(): string;
}