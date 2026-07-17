import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultRakSessionConfig } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/DefaultRakSessionConfig.d.ts'
import type { RakChannelConfig } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelConfig.d.ts'
import type { RakServerChannelConfig } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerChannelConfig.d.ts'
export class DefaultRakClientConfig extends DefaultRakSessionConfig {
    constructor(arg0: Channel)
    readonly clientInternalAddresses: number;
    readonly compatibilityMode: boolean;
    readonly connectTimeout: number;
    readonly ipDontFragment: boolean;
    readonly mtuSizes: number[];
    readonly serverGuid: number;
    readonly sessionTimeout: number;
    readonly timeBetweenSendConnectionAttemptsMS: number;
    readonly unconnectedMagic: ByteBuf;
    getClientInternalAddresses(): number;
    getConnectTimeout(): number;
    getMtuSizes(): number[];
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    getServerGuid(): number;
    getSessionTimeout(): number;
    getTimeBetweenSendConnectionAttemptsMS(): number;
    getUnconnectedMagic(): ByteBuf;
    isCompatibilityMode(): boolean;
    isIpDontFragment(): boolean;
    setClientInternalAddresses(arg0: number): void;
    setCompatibilityMode(arg0: boolean): void;
    setConnectTimeout(arg0: number): DefaultRakClientConfig;
    setIpDontFragment(arg0: boolean): void;
    setMtuSizes(arg0: number[]): void;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setServerGuid(arg0: number): DefaultRakClientConfig;
    setSessionTimeout(arg0: number): RakChannelConfig;
    setTimeBetweenSendConnectionAttemptsMS(arg0: number): void;
    setUnconnectedMagic(arg0: ByteBuf): RakServerChannelConfig;
}