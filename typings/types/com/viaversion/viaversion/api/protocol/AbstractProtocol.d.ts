import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { EntityTracker } from '../../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { ItemHasher } from '../../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketMappings } from '../../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMappings.d.ts'
import type { PacketTypeMap } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ComponentRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/EntityRewriter.d.ts'
import type { ItemRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ItemRewriter.d.ts'
import type { MappingDataListener } from '../../../../../com/viaversion/viaversion/api/rewriter/MappingDataListener.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ParticleRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/RegistryDataRewriter.d.ts'
import type { Rewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/Rewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/TagRewriter.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { InformativeException } from '../../../../../com/viaversion/viaversion/exception/InformativeException.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractProtocol<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Object implements Protocol<CU, CM, SM, SU> {
    constructor()
    constructor(arg0: Class<CU>, arg1: Class<CM>, arg2: Class<SM>, arg3: Class<SU>)
    readonly clientVersion: ProtocolVersion;
    // private clientboundMappings: PacketMappings;
    // private initialized: boolean;
    readonly logger: ProtocolLogger;
    // private mappedClientboundPacketType: Class<CM>;
    // private mappedServerboundPacketType: Class<SM>;
    readonly packetTypesProvider: PacketTypesProvider<CU, CM, SM, SU>;
    readonly serverVersion: ProtocolVersion;
    // private serverboundMappings: PacketMappings;
    // private storedObjects: Map<Class<Object>, Object>;
    // private unmappedClientboundPacketType: Class<CU>;
    // private unmappedServerboundPacketType: Class<SU>;
    addEntityTracker(arg0: UserConnection): void;
    addEntityTracker(arg0: UserConnection, arg1: EntityTracker): void;
    addItemHasher(arg0: UserConnection): void;
    addItemHasher(arg0: UserConnection, arg1: ItemHasher): void;
    appendClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    appendServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    applySharedRegistrations(): void;
    // private callOnMappingDataLoaded(arg0: MappingDataListener): void;
    // private callRegister(arg0: Rewriter<any>): void;
    cancelClientbound(arg0: CU): void;
    cancelClientbound(arg0: State, arg1: number): void;
    cancelServerbound(arg0: SU): void;
    cancelServerbound(arg0: State, arg1: number): void;
    createClientboundPacketMappings(): PacketMappings;
    createLogger(): ProtocolLogger;
    createPacketTypesProvider(): PacketTypesProvider<CU, CM, SM, SU>;
    createServerboundPacketMappings(): PacketMappings;
    dependsOn(): Class<Protocol<any, any, any, any>>;
    get<T extends Object | number | string | boolean>(arg0: Class<T>): T;
    getBlockRewriter(): BlockRewriter<CU>;
    getClientVersion(): ProtocolVersion;
    getComponentRewriter(): ComponentRewriter;
    getEntityRewriter(): EntityRewriter<any>;
    getItemRewriter(): ItemRewriter<any>;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData;
    getPacketTypesProvider(): PacketTypesProvider<CU, CM, SM, SU>;
    getParticleRewriter(): ParticleRewriter;
    getRecipeRewriter(): RecipeDisplayRewriter<CU>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getServerVersion(): ProtocolVersion;
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
    onMappingDataLoaded(): void;
    // private printRemapError(arg0: Direction, arg1: State, arg2: number, arg3: number, arg4: InformativeException): void;
    put(arg0: Object): void;
    register(arg0: ViaProviders): void;
    // private register(arg0: PacketMappings, arg1: PacketType, arg2: PacketType, arg3: Class<PacketType>, arg4: Class<PacketType>, arg5: (param0: PacketWrapper) => void, arg6: boolean): void;
    registerClientbound(arg0: CU, arg1: CM): void;
    registerClientbound(arg0: CU, arg1: CM, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: CU, arg1: CM, arg2: (param0: PacketWrapper) => void, arg3: boolean): void;
    registerClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: ClientboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    registerClientbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void, arg4: boolean): void;
    // private registerPacketIdChanges<U extends PacketType, M extends PacketType>(arg0: { [key in State]: PacketTypeMap<U> }, arg1: { [key in State]: PacketTypeMap<M> }, arg2: (param0: U) => boolean, arg3: (param0: U, param1: M) => void): void;
    registerPackets(): void;
    registerServerbound(arg0: SU, arg1: SM): void;
    registerServerbound(arg0: SU, arg1: SM, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: SU, arg1: SM, arg2: (param0: PacketWrapper) => void, arg3: boolean): void;
    registerServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: ServerboundPacketType, arg2: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void): void;
    registerServerbound(arg0: State, arg1: number, arg2: number, arg3: (param0: PacketWrapper) => void, arg4: boolean): void;
    replaceClientbound(arg0: CU, arg1: (param0: PacketWrapper) => void): void;
    replaceServerbound(arg0: SU, arg1: (param0: PacketWrapper) => void): void;
    setClientVersion(arg0: ProtocolVersion): void;
    setServerVersion(arg0: ProtocolVersion): void;
    toString(): string;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
    types(): VersionedTypesHolder;
}