import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class AttachmentSerializingImpl extends Object {
    static deserializeAttachmentData(paramarg0: ValueInput): Map<Object | null, Object>;
    static hasPersistentAttachments(paramarg0: Map<Object | null, Object | null>): boolean;
    static serializeAttachmentData(paramarg0: ValueOutput, paramarg1: Map<Object | null, Object>): void;
    constructor()
}