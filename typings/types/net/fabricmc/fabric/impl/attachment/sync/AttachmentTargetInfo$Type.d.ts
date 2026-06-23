import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTargetInfo } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class AttachmentTargetInfo$Type<T extends unknown> extends Record {
    // private id: number;
    // private streamCodec: StreamCodec<ByteBuf, AttachmentTargetInfo<T>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    streamCodec(): StreamCodec<ByteBuf, AttachmentTargetInfo<T>>;
    toString(): string;
}