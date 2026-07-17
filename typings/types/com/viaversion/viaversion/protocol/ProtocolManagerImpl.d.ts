import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ProtocolManager } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolManager.d.ts'
import type { ProtocolPathEntry } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolPathEntry.d.ts'
import type { ProtocolPathKey } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolPathKey.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { VersionedPacketTransformer } from '../../../../com/viaversion/viaversion/api/protocol/packet/VersionedPacketTransformer.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ServerProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ServerProtocolVersion.d.ts'
import type { Pair } from '../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ProtocolManagerImpl extends Object implements ProtocolManager {
    constructor()
    // private clientboundBaseProtocols: Pair<Range<ProtocolVersion>, Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>[];
    // private mappingLoaderExecutor: ExecutorService;
    // private mappingLoaderFutures: JavaMap<Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, CompletableFuture<void>>;
    // private mappingLoaderLock: ReadWriteLock;
    // private mappingsLoaded: boolean;
    readonly maxPathDeltaIncrease: number;
    readonly maxProtocolPathSize: number;
    // private pathCache: JavaMap<ProtocolPathKey, ProtocolPathEntry[]>;
    readonly protocols: JavaMap<Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, Protocol<any, any, any, any>>;
    // private registryMap: JavaMap<ProtocolVersion, JavaMap<ProtocolVersion, Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>>;
    readonly serverProtocolVersion: ServerProtocolVersion;
    // private serverboundBaseProtocols: Pair<Range<ProtocolVersion>, Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>[];
    readonly supportedVersions: ProtocolVersion[];
    addMappingLoaderFuture(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg2: () => void): void;
    addMappingLoaderFuture(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: () => void): void;
    checkForMappingCompletion(): boolean;
    checkForMappingCompletion(arg0: boolean): boolean;
    completeMappingDataLoading(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): void;
    createPacketTransformer<C extends ClientboundPacketType, S extends ServerboundPacketType>(arg0: ProtocolVersion, arg1: Class<C>, arg2: Class<S>): VersionedPacketTransformer<C, S>;
    createPacketWrapper(arg0: PacketType, arg1: ByteBuf, arg2: UserConnection): PacketWrapper;
    createPacketWrapper(arg0: number, arg1: ByteBuf, arg2: UserConnection): PacketWrapper;
    getBaseProtocol(): Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>;
    getBaseProtocols(arg0: ProtocolVersion, arg1: ProtocolVersion): Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>[];
    getMappingLoaderFuture(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>): CompletableFuture<void>;
    getMaxPathDeltaIncrease(): number;
    getMaxProtocolPathSize(): number;
    getProtocol(arg0: ProtocolVersion, arg1: ProtocolVersion): Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>;
    getProtocol<T extends Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>(arg0: Class<T>): T;
    getProtocolPath(arg0: number, arg1: number): ProtocolPathEntry[];
    getProtocolPath(arg0: ProtocolVersion, arg1: ProtocolVersion): ProtocolPathEntry[];
    // private getProtocolPath(arg0: JavaMap<ProtocolVersion, Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: ProtocolVersion, arg2: ProtocolVersion): JavaMap<ProtocolVersion, Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>;
    getProtocols(): Protocol<any, any, any, any>[];
    getServerProtocolVersion(): ServerProtocolVersion;
    getSupportedVersions(): ProtocolVersion[];
    hasLoadedMappings(): boolean;
    isBaseProtocol(arg0: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>): boolean;
    isWorkingPipe(): boolean;
    // private logIfErrored(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>, arg1: Throwable): void;
    refreshVersions(): void;
    registerBaseProtocol(arg0: Direction, arg1: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>, arg2: Range<ProtocolVersion>): void;
    registerProtocol(arg0: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>, arg1: ProtocolVersion, arg2: ProtocolVersion): void;
    registerProtocol(arg0: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>, arg1: ProtocolVersion[], arg2: ProtocolVersion): void;
    registerProtocols(): void;
    setMaxPathDeltaIncrease(arg0: number): void;
    setMaxProtocolPathSize(arg0: number): void;
    setServerProtocol(arg0: ServerProtocolVersion): void;
    shutdownLoaderExecutor(): void;
}