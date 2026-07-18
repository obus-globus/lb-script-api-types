import type { ChannelId } from '../../../../../io/netty/channel/ChannelId.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2StreamChannelId extends Object implements ChannelId {
    constructor(arg0: ChannelId, arg1: number)
    // private id: number;
    // private parentId: ChannelId;
    asLongText(): string;
    asShortText(): string;
    compareTo(arg0: ChannelId): number;
    equals(arg0: Object | null): boolean;
    getSequenceId(): number;
    hashCode(): number;
    toString(): string;
}