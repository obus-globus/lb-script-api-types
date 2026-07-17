import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundCustomIngredientPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, ServerboundCustomIngredientPayload>;
    static TYPE: CustomPacketPayload$Type<ServerboundCustomIngredientPayload>;
    constructor(protocolVersion: number, registeredSerializers: Identifier[])
    // private protocolVersion: number;
    // private registeredSerializers: Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    protocolVersion(): number;
    registeredSerializers(): Identifier[];
    toString(): string;
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}