import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentSyncPredicate } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentSyncPredicate.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AttachmentTypeImpl<A extends unknown> extends Record implements AttachmentType<A> {
    // private copyOnDeath: boolean;
    // private identifier: Identifier;
    // private initializer: () => A;
    // private maxSyncSize: number;
    // private persistenceCodec: Codec<A>;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, A>;
    // private syncPredicate: (param0: Object | null, param1: Object | null) => boolean;
    copyOnDeath(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): Identifier;
    initializer(): () => A;
    isPersistent(): boolean;
    isSynced(): boolean;
    maxSyncSize(): number;
    persistenceCodec(): Codec<A>;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, A>;
    syncPredicate(): (param0: Object | null, param1: Object | null) => boolean;
    toString(): string;
}