import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { IRakSessionCodec } from '../../../../../../../com/viaversion/viafabricplus/injection/access/core/bedrock/IRakSessionCodec.d.ts'
import type { ByteBufAllocator } from '../../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ScheduledFuture } from '../../../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { InetSocketAddress } from '../../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakDisconnectReason } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakDisconnectReason.d.ts'
import type { RakPriority } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakPriority.d.ts'
import type { RakSlidingWindow } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakSlidingWindow.d.ts'
import type { RakState } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakState.d.ts'
import type { RakChannelMetrics } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelMetrics.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
import type { RakDatagramPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/RakDatagramPacket.d.ts'
import type { RakMessage } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/RakMessage.d.ts'
import type { BitQueue } from '../../../../../../../org/cloudburstmc/netty/util/BitQueue.d.ts'
import type { FastBinaryMinHeap } from '../../../../../../../org/cloudburstmc/netty/util/FastBinaryMinHeap.d.ts'
import type { IntRange } from '../../../../../../../org/cloudburstmc/netty/util/IntRange.d.ts'
import type { SplitPacketHelper } from '../../../../../../../org/cloudburstmc/netty/util/SplitPacketHelper.d.ts'
export class RakSessionCodec extends ChannelDuplexHandler implements IRakSessionCodec {
    static NAME: string;
    constructor(arg0: RakChannel)
    readonly channel: RakChannel;
    // private currentPingTime: number;
    // private datagramReadIndex: number;
    // private datagramWriteIndex: number;
    // private incomingAcks: IntRange[];
    // private incomingNaks: IntRange[];
    // private lastFlush: number;
    // private lastMinWeight: number;
    // private lastPingTime: number;
    // private lastPongTime: number;
    // private lastTouched: number;
    // private orderReadIndex: number[];
    // private orderWriteIndex: number[];
    // private orderingHeaps: FastBinaryMinHeap<EncapsulatedPacket>[];
    // private outgoingAcks: IntRange[];
    // private outgoingNaks: IntRange[];
    // private outgoingPacketNextWeights: number[];
    // private outgoingPackets: FastBinaryMinHeap<EncapsulatedPacket>;
    // private reliabilityReadIndex: number;
    // private reliabilityWriteIndex: number;
    // private reliableDatagramQueue: BitQueue;
    // private sentDatagrams: JavaMap<any, any>;
    // private slidingWindow: RakSlidingWindow;
    // private splitIndex: number;
    // private splitPackets: SplitPacketHelper[];
    // private state: RakState;
    // private tickFuture: ScheduledFuture<Object>;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private checkForClosed(): void;
    // private checkForOrdered(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: RakDisconnectReason): void;
    createDatagramPacket(): RakDatagramPacket;
    // private createEncapsulated(arg0: RakMessage): EncapsulatedPacket[];
    createEncapsulatedPacket(): EncapsulatedPacket;
    // private ctx(): ChannelHandlerContext;
    disconnect(): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: RakDisconnectReason): void;
    // private disconnect0(arg0: RakDisconnectReason): ChannelPromise;
    flush(arg0: ChannelHandlerContext): void;
    getAcknowledgeQueue(arg0: boolean): IntRange[];
    getChannel(): Channel;
    getMetrics(): RakChannelMetrics;
    getMtu(): number;
    // private getNextWeight(arg0: RakPriority): number;
    getPing(): number;
    getRTT(): number;
    // private getReassembledPacket(arg0: EncapsulatedPacket, arg1: ByteBufAllocator): EncapsulatedPacket;
    getRemoteAddress(): InetSocketAddress;
    // private handleDatagram(arg0: ChannelHandlerContext, arg1: RakDatagramPacket): void;
    // private handleIncomingAcknowledge(arg0: ChannelHandlerContext, arg1: number, arg2: IntRange[], arg3: boolean): void;
    // private initHeapWeights(): void;
    // private internalFlush(arg0: ChannelHandlerContext): void;
    isClosed(): boolean;
    isStale(): boolean;
    isStale(arg0: number): boolean;
    isTimedOut(): boolean;
    isTimedOut(arg0: number): boolean;
    // private onIncomingAck(arg0: RakDatagramPacket, arg1: number): void;
    // private onIncomingNack(arg0: ChannelHandlerContext, arg1: RakDatagramPacket, arg2: number): void;
    // private onOrderedReceived(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
    // private onTick(): void;
    recalculatePongTime(arg0: number): void;
    // private send(arg0: ChannelHandlerContext, arg1: RakMessage): void;
    // private sendDatagram(arg0: ChannelHandlerContext, arg1: RakDatagramPacket, arg2: number, arg3: JavaMap<any, any>): void;
    // private sendDatagrams(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    // private sendImmediate(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket[]): void;
    // private sendStaleDatagrams(arg0: ChannelHandlerContext, arg1: number): number;
    // private setState(arg0: RakState): void;
    // private touch(): void;
    // private tryTick(): void;
    viaFabricPlus$SentDatagrams(): number;
    viaFabricPlus$getOutgoingPackets(): number;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    writePing(arg0: ChannelHandlerContext, arg1: number): void;
}