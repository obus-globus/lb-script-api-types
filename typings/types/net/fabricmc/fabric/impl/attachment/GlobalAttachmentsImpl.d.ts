import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { GlobalAttachments } from '../../../../../net/fabricmc/fabric/api/attachment/v1/GlobalAttachments.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AttachmentTargetImpl } from '../../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class GlobalAttachmentsImpl extends Object implements GlobalAttachments, AttachmentTargetImpl {
    static NBT_ATTACHMENT_KEY: string;
    constructor(arg0: MinecraftServer)
    // private attachedChangedListeners: JavaMap<Object, Object>;
    // private dataAttachments: JavaMap<Object, Object>;
    // private deferredSyncedAttachments: (Object | null)[];
    // private server: MinecraftServer;
    // private syncedAttachments: JavaMap<Object, Object>;
    // private acknowledgeSynced(arg0: AttachmentType<Object>, arg1: Object): void;
    // private acknowledgeSyncedEntry(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): JavaMap<AttachmentType<Object>, Object | null>;
    fabric_getAttachments(): JavaMap<Object | null, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: (Object | null)[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends unknown>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<Object>, arg1: AttachmentTargetInfo<Object>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    getAttached(arg0: AttachmentType<Object>): Object;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    onAttachedSet(arg0: AttachmentType<Object>): Event<Object>;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
}