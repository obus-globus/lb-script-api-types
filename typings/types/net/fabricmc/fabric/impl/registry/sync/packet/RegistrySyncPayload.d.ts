import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAttribute } from '../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryAttribute.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RegistrySyncPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, RegistrySyncPayload>;
    static ID: CustomPacketPayload$Type<RegistrySyncPayload>;
    constructor(arg0: JavaMap<Identifier, JavaMap<any, any>>)
    constructor(registryMap: JavaMap<Identifier, JavaMap<any, any>>, registryAttributes: JavaMap<Identifier, RegistryAttribute[]>)
    // private registryAttributes: JavaMap<Identifier, RegistryAttribute[]>;
    // private registryMap: JavaMap<Identifier, JavaMap<any, any>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registryAttributes(): JavaMap<Identifier, RegistryAttribute[]>;
    registryMap(): JavaMap<Identifier, JavaMap<any, any>>;
    toString(): string;
    type(): CustomPacketPayload$Type<RegistrySyncPayload>;
    // private write(arg0: FriendlyByteBuf): void;
}