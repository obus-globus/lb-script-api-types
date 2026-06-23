import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTargetInfo$Type } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo$Type.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export interface AttachmentTargetInfo<T extends unknown> extends Object{
    appendDebugInformation(arg0: MutableComponent): void;
    getId(): number;
    getTarget(arg0: Level): AttachmentTarget;
    getType(): AttachmentTargetInfo$Type<T>;
}