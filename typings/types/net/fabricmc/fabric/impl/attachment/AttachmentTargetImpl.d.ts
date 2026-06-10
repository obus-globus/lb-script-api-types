import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AttachmentChange } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export interface AttachmentTargetImpl extends Object, AttachmentTarget {
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends Object | number | string | boolean>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    getAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    modifyAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: (param0: A) => Object | null): A;
    onAttachedSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    removeAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    setAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
}