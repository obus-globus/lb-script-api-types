import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricRegistryFriendlyByteBuf } from '../../../net/fabricmc/fabric/impl/networking/FabricRegistryFriendlyByteBuf.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { NbtAccounter } from '../../../net/minecraft/nbt/NbtAccounter.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamDecoder } from '../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamEncoder } from '../../../net/minecraft/network/codec/StreamEncoder.d.ts'
import type { ChunkPos } from '../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
export class RegistryFriendlyByteBuf extends FriendlyByteBuf implements FabricRegistryFriendlyByteBuf {
    static MAX_COMPONENT_STRING_LENGTH: number;
    static MAX_STRING_LENGTH: number;
    static decorator(paramregistryAccess: RegistryAccess): (param0: ByteBuf) => RegistryFriendlyByteBuf;
    static limitValue(paramoriginal: (param0: Object | null) => unknown, paramlimit: number): (param0: Object | null) => unknown;
    static readBlockPos(paraminput: ByteBuf): BlockPos;
    static readByteArray(paraminput: ByteBuf): number[];
    static readByteArray(paraminput: ByteBuf, parammaxSize: number): number[];
    static readChunkPos(paraminput: ByteBuf): ChunkPos;
    static readContainerId(paraminput: ByteBuf): number;
    static readFixedSizeLongArray(paraminput: ByteBuf, paramoutput: number[]): number[];
    static readLongArray(paraminput: ByteBuf): number[];
    static readNbt(paraminput: ByteBuf): CompoundTag;
    static readNbt(paraminput: ByteBuf, paramaccounter: NbtAccounter): Tag;
    static readNullable(paraminput: Object | null, paramvalueDecoder: (param0: Object | null) => Object | null): Object | null;
    static readQuaternion(paraminput: ByteBuf): Quaternionf;
    static readUUID(paraminput: ByteBuf): UUID;
    static readVector3f(paraminput: ByteBuf): Vector3f;
    static writeBlockPos(paramoutput: ByteBuf, parampos: BlockPos): void;
    static writeByteArray(paramoutput: ByteBuf, parambytes: number[]): void;
    static writeChunkPos(paramoutput: ByteBuf, paramchunkPos: ChunkPos): void;
    static writeContainerId(paramoutput: ByteBuf, paramid: number): void;
    static writeFixedSizeLongArray(paramoutput: ByteBuf, paramlongs: number[]): void;
    static writeLongArray(paramoutput: ByteBuf, paramlongs: number[]): void;
    static writeNbt(paramoutput: ByteBuf, paramtag: Tag): void;
    static writeNullable(paramoutput: Object | null, paramvalue: Object | null, paramvalueEncoder: (param0: Object | null, param1: Object | null) => void): void;
    static writeQuaternion(paramoutput: ByteBuf, paramvalue: Quaternionfc): void;
    static writeUUID(paramoutput: ByteBuf, paramuuid: UUID): void;
    static writeVector3f(paramoutput: ByteBuf, paramv: Vector3fc): void;
    constructor(source: ByteBuf, registryAccess: RegistryAccess)
    // private registryAccess: RegistryAccess;
    // private sendableConfigurationChannels: (Object | null)[];
    fabric_getSendableConfigurationChannels(): (Object | null)[];
    fabric_setSendableConfigurationChannels(arg0: (Object | null)[]): void;
    registryAccess(): RegistryAccess;
}