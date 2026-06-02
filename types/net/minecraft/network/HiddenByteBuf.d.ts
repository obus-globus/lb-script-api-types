import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HiddenByteBuf extends Record implements ReferenceCounted {
    static pack(parammsg: Object): Object;
    static unpack(parammsg: Object): Object;
    constructor(contents: ByteBuf)
    // private contents: ByteBuf;
    contents(): ByteBuf;
    equals(o: Object | null): boolean;
    hashCode(): number;
    refCnt(): number;
    release(): boolean;
    release(decrement: number): boolean;
    retain(): HiddenByteBuf;
    retain(increment: number): HiddenByteBuf;
    toString(): string;
    touch(): HiddenByteBuf;
    touch(hint: Object): HiddenByteBuf;
}