import type { LocalChannel } from '../../../../../io/netty/channel/local/LocalChannel.d.ts'
export class NoPacketSendChannel extends LocalChannel {
    static INSTANCE: NoPacketSendChannel;
    private constructor()
}