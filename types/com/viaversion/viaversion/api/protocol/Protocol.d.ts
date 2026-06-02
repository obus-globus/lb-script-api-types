import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ComponentRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/EntityRewriter.d.ts'
import type { ItemRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ItemRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ParticleRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/TagRewriter.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Protocol<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Object{
    appendClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    appendServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    cancelClientbound(arg0: CU): void;
    cancelClientbound(arg0: State, arg1: number): void;
    cancelServerbound(arg0: SU): void;
    cancelServerbound(arg0: State, arg1: number): void;
    dependsOn(): Class<Protocol<Object, Object, Object, Object>>;
    get<T extends Object | number | string | boolean>(arg0: Class<T>): T;
    getComponentRewriter(): ComponentRewriter;
    getEntityRewriter(): EntityRewriter<Object>;
    getItemRewriter(): ItemRewriter<Object>;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData;
    getPacketTypesProvider(): PacketTypesProvider<CU, CM, SM, SU>;
    getParticleRewriter(): ParticleRewriter;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter;
    hasMappingDataToLoad(): boolean;
    hasRegisteredClientbound(arg0: CU): boolean;
    hasRegisteredClientbound(arg0: State, arg1: number): boolean;
    hasRegisteredServerbound(arg0: SU): boolean;
    hasRegisteredServerbound(arg0: State, arg1: number): boolean;
    init(arg0: UserConnection): void;
    initialize(): void;
    isBaseProtocol(): boolean;
    loadMappingData(): void;
    mappedTypes(): VersionedTypesHolder;
    put(arg0: Object): void;
    register(arg0: ViaProviders): void;
    registerClientbound(arg0: CU, arg1: CM): void;
    registerClientbound(arg0: CU, arg1: CM, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: CU, arg1: CM, arg2: (param0: PacketWrapper) => void, arg3: boolean): void;
    registerClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: ClientboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void, arg4: boolean): void;
    registerServerbound(arg0: SU, arg1: SM): void;
    registerServerbound(arg0: SU, arg1: SM, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: SU, arg1: SM, arg2: (param0: PacketWrapper) => void, arg3: boolean): void;
    registerServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: ServerboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void, arg4: boolean): void;
    replaceClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    replaceServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
    types(): VersionedTypesHolder;
}