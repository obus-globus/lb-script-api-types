import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmbeddedChannelId extends Object implements ChannelId {
    private constructor()
    asLongText(): string;
    asShortText(): string;
    compareTo(arg0: ChannelId): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}