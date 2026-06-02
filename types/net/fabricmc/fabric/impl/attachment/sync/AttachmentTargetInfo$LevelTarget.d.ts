import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTargetInfo } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { AttachmentTargetInfo$Type } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo$Type.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class AttachmentTargetInfo$LevelTarget extends Object implements AttachmentTargetInfo<Level> {
    static INSTANCE: AttachmentTargetInfo$LevelTarget;
    static MAX_SIZE_IN_BYTES: number;
    static PACKET_CODEC: StreamCodec<ByteBuf, Object>;
    private constructor()
    appendDebugInformation(arg0: MutableComponent): void;
    getId(): number;
    getTarget(arg0: Level): AttachmentTarget;
    getType(): AttachmentTargetInfo$Type<Level>;
}