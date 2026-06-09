import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { SimpleProtocol$DummyPacketTypes } from '../../../../../com/viaversion/viaversion/api/protocol/SimpleProtocol$DummyPacketTypes.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ComponentRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/EntityRewriter.d.ts'
import type { ItemRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ItemRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ParticleRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/TagRewriter.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SimpleProtocol extends Protocol<SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes>, Object {
    dependsOn(): Class<Protocol<Object, Object, Object, Object>>;
    getComponentRewriter(): ComponentRewriter;
    getEntityRewriter(): EntityRewriter<Object>;
    getItemRewriter(): ItemRewriter<Object>;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter;
    hasMappingDataToLoad(): boolean;
    hasRegisteredClientbound<CU extends ClientboundPacketType>(arg0: CU): boolean;
    hasRegisteredServerbound<SU extends ServerboundPacketType>(arg0: SU): boolean;
    init(arg0: UserConnection): void;
    isBaseProtocol(): boolean;
    mappedTypes(): VersionedTypesHolder;
    register(arg0: ViaProviders): void;
    registerClientbound<CU extends ClientboundPacketType, CM extends ClientboundPacketType>(arg0: CU, arg1: CM): void;
    registerClientbound<CU extends ClientboundPacketType, CM extends ClientboundPacketType>(arg0: CU, arg1: CM, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: ClientboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    registerServerbound<SU extends ServerboundPacketType, SM extends ServerboundPacketType>(arg0: SU, arg1: SM): void;
    registerServerbound<SU extends ServerboundPacketType, SM extends ServerboundPacketType>(arg0: SU, arg1: SM, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: ServerboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    types(): VersionedTypesHolder;
}