import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTargetInfo } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { AttachmentTargetInfo$Type } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo$Type.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class AttachmentTargetInfo$EntityTarget extends Record implements AttachmentTargetInfo<Entity> {
    static MAX_SIZE_IN_BYTES: number;
    static PACKET_CODEC: StreamCodec<ByteBuf, AttachmentTargetInfo<Object>>;
    constructor(networkId: number)
    // private networkId: number;
    appendDebugInformation(arg0: MutableComponent): void;
    equals(arg0: Object | null): boolean;
    getId(): number;
    getTarget(arg0: Level): AttachmentTarget;
    getType(): AttachmentTargetInfo$Type<Entity>;
    hashCode(): number;
    networkId(): number;
    toString(): string;
}