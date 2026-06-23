import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
export interface EntityDataSerializer<T extends unknown> extends Object{
    codec(): StreamCodec<RegistryFriendlyByteBuf, T>;
    copy(value: T): T;
    createAccessor(id: number): EntityDataAccessor<T>;
}