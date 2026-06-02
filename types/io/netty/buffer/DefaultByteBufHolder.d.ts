import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultByteBufHolder extends Object implements ByteBufHolder {
    constructor(arg0: ByteBuf)
    // private data: ByteBuf;
    content(): ByteBuf;
    contentToString(): string;
    copy(): ByteBufHolder;
    duplicate(): ByteBufHolder;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): ByteBufHolder;
    retain(): ByteBufHolder;
    retain(arg0: number): ByteBufHolder;
    retainedDuplicate(): ByteBufHolder;
    toString(): string;
    touch(): ByteBufHolder;
    touch(arg0: Object): ByteBufHolder;
}