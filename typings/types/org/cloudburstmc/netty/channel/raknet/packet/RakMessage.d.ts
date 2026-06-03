import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { DefaultByteBufHolder } from '../../../../../../io/netty/buffer/DefaultByteBufHolder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakPriority } from '../../../../../../org/cloudburstmc/netty/channel/raknet/RakPriority.d.ts'
import type { RakReliability } from '../../../../../../org/cloudburstmc/netty/channel/raknet/RakReliability.d.ts'
export class RakMessage extends DefaultByteBufHolder {
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: RakReliability)
    constructor(arg0: ByteBuf, arg1: RakReliability, arg2: RakPriority)
    constructor(arg0: ByteBuf, arg1: RakReliability, arg2: RakPriority, arg3: number)
    // private channel: number;
    // private priority: RakPriority;
    // private reliability: RakReliability;
    channel(): number;
    copy(): RakMessage;
    duplicate(): RakMessage;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    priority(): RakPriority;
    reliability(): RakReliability;
    replace(arg0: ByteBuf): RakMessage;
    retain(): RakMessage;
    retain(arg0: number): ByteBufHolder;
    retainedDuplicate(): RakMessage;
    toString(): string;
    touch(): RakMessage;
    touch(arg0: Object): ByteBufHolder;
}