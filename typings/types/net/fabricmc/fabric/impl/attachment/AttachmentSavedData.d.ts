import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { AttachmentTarget } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTargetImpl } from '../../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
export class AttachmentSavedData extends SavedData {
    static ID: Identifier;
    static codec(paramarg0: MinecraftServer): Codec<AttachmentSavedData>;
    static codec(paramarg0: ServerLevel): Codec<AttachmentSavedData>;
    constructor(arg0: AttachmentTarget)
    // private target: AttachmentTargetImpl;
    // private wasSerialized: boolean;
    isDirty(): boolean;
}