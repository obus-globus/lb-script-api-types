import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface AttachmentType<A extends Object | number | string | boolean> extends Object {
    copyOnDeath(): boolean;
    identifier(): Identifier;
    initializer(): () => A;
    isPersistent(): boolean;
    isSynced(): boolean;
    persistenceCodec(): Codec<A>;
}