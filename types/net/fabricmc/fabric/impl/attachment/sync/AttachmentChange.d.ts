import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { AttachmentTargetInfo } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class AttachmentChange extends Record {
    static PACKET_CODEC: StreamCodec<RegistryFriendlyByteBuf, AttachmentChange>;
    constructor(targetInfo: AttachmentTargetInfo<Object>, type: AttachmentType<Object>, value: Object)
    // private targetInfo: AttachmentTargetInfo<Object>;
    // private type: AttachmentType<Object>;
    // private value: Object;
    // private encodePacket(arg0: RegistryFriendlyByteBuf): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    targetInfo(): AttachmentTargetInfo<Object>;
    toString(): string;
    tryApply(arg0: Level): void;
    type(): AttachmentType<Object>;
    value(): Object;
    withNewTarget(arg0: AttachmentTargetInfo<Object>): AttachmentChange;
}