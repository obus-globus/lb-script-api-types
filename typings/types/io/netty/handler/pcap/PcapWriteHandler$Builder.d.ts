import type { PcapWriteHandler } from '../../../../io/netty/handler/pcap/PcapWriteHandler.d.ts'
import type { PcapWriteHandler$ChannelType } from '../../../../io/netty/handler/pcap/PcapWriteHandler$ChannelType.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PcapWriteHandler$Builder extends Object {
    constructor(arg0: any)
    // private captureZeroByte: boolean;
    // private channelType: PcapWriteHandler$ChannelType;
    // private handlerAddr: InetSocketAddress;
    // private initiatorAddr: InetSocketAddress;
    // private isServerPipeline: boolean;
    // private sharedOutputStream: boolean;
    // private writePcapGlobalHeader: boolean;
    build(arg0: OutputStream): PcapWriteHandler;
    captureZeroByte(arg0: boolean): PcapWriteHandler$Builder;
    forceTcpChannel(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: boolean): PcapWriteHandler$Builder;
    forceUdpChannel(arg0: InetSocketAddress, arg1: InetSocketAddress): PcapWriteHandler$Builder;
    sharedOutputStream(arg0: boolean): PcapWriteHandler$Builder;
    writePcapGlobalHeader(arg0: boolean): PcapWriteHandler$Builder;
}