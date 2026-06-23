import type { GameProfile } from '../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { ScopedValue } from '../../../../../../java/lang/ScopedValue.d.ts'
import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContext$Key } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$Key.d.ts'
import type { PacketContext$ReadKey } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$ReadKey.d.ts'
import type { PacketContextProvider } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export class PacketContextImpl extends Object implements PacketContext {
    static CONNECTION: PacketContext$Key<Connection>;
    static CONNECTION: PacketContext$ReadKey<Connection>;
    static GAME_PROFILE: PacketContext$Key<GameProfile>;
    static GAME_PROFILE: PacketContext$ReadKey<GameProfile>;
    static REGISTRY_ACCESS: PacketContext$Key<RegistryAccess>;
    static REGISTRY_ACCESS: PacketContext$ReadKey<RegistryAccess>;
    static SERVER_INSTANCE: PacketContext$Key<MinecraftServer>;
    static SERVER_INSTANCE: PacketContext$ReadKey<MinecraftServer>;
    static VALUE: ScopedValue<PacketContext>;
    static get(): PacketContext;
    static key(paramarg0: Identifier): PacketContext$Key<Object>;
    static orElseThrow(): PacketContext;
    static runWithContext(paramarg0: PacketContextProvider, paramarg1: () => void): void;
    static runWithoutContext(paramarg0: () => void): void;
    static supplyWithContext(paramarg0: PacketContextProvider, paramarg1: () => Object | null): Object | null;
    static supplyWithoutContext(paramarg0: () => Object | null): Object | null;
    constructor(arg0: Connection)
    // private contextMap: Map<PacketContext$Key<Object>, Object>;
    // private lock: ReadWriteLock;
    get<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    orElse<T extends unknown>(arg0: PacketContext$ReadKey<T>, arg1: T): T;
    orElseThrow<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    set<T extends unknown>(arg0: PacketContext$Key<T>, arg1: T): void;
}