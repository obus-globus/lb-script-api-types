import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class AttachmentSerializingImpl extends Object {
    static deserializeAttachmentData(paramarg0: ValueInput): Map<AttachmentType<Object>, Object>;
    static hasPersistentAttachments(paramarg0: Map<AttachmentType<Object>, Object>): boolean;
    static serializeAttachmentData(paramarg0: ValueOutput, paramarg1: Map<AttachmentType<Object>, Object>): void;
    constructor()
}