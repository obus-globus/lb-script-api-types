import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttachmentSyncPredicate } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentSyncPredicate.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface AttachmentRegistry$Builder<A extends unknown> extends Object {
    buildAndRegister(arg0: Identifier): AttachmentType<A>;
    copyOnDeath(): AttachmentRegistry$Builder<A>;
    initializer(arg0: () => A): AttachmentRegistry$Builder<A>;
    persistent(arg0: Codec<A>): AttachmentRegistry$Builder<A>;
    syncWith(arg0: StreamCodec<RegistryFriendlyByteBuf, A>, arg1: (param0: Object | null, param1: Object | null) => boolean): AttachmentRegistry$Builder<A>;
    syncWith(arg0: StreamCodec<RegistryFriendlyByteBuf, A>, arg1: (param0: Object | null, param1: Object | null) => boolean, arg2: number): AttachmentRegistry$Builder<A>;
}