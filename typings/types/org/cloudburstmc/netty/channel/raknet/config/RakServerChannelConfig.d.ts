import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelConfig } from '../../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakServerMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerMetrics.d.ts'
export interface RakServerChannelConfig extends ChannelConfig, Object{
    getAdvertisement(): ByteBuf;
    getGlobalPacketLimit(): number;
    getGuid(): number;
    getHandlePing(): boolean;
    getIpDontFragment(): boolean;
    getMaxChannels(): number;
    getMaxConnections(): number;
    getMaxMtu(): number;
    getMetrics(): RakServerMetrics;
    getMinMtu(): number;
    getPacketLimit(): number;
    getSendCookie(): boolean;
    getSupportedProtocols(): number[];
    getUnconnectedMagic(): ByteBuf;
    setAdvertisement(arg0: ByteBuf): RakServerChannelConfig;
    setGlobalPacketLimit(arg0: number): void;
    setGuid(arg0: number): RakServerChannelConfig;
    setHandlePing(arg0: boolean): RakServerChannelConfig;
    setIpDontFragment(arg0: boolean): void;
    setMaxChannels(arg0: number): RakServerChannelConfig;
    setMaxConnections(arg0: number): RakServerChannelConfig;
    setMaxMtu(arg0: number): RakServerChannelConfig;
    setMetrics(arg0: RakServerMetrics): void;
    setMinMtu(arg0: number): RakServerChannelConfig;
    setPacketLimit(arg0: number): void;
    setSendCookie(arg0: boolean): void;
    setSupportedProtocols(arg0: number[]): RakServerChannelConfig;
    setUnconnectedMagic(arg0: ByteBuf): RakServerChannelConfig;
}