import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { GameProfile } from '../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ScopedValue } from '../../../../../../java/lang/ScopedValue.d.ts'
import type { ReadWriteLock } from '../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContext$Key } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$Key.d.ts'
import type { PacketContext$ReadKey } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$ReadKey.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export class PacketContextImpl extends Object implements PacketContext {
    static CONNECTION: PacketContext$Key<Connection>;
    static GAME_PROFILE: PacketContext$Key<GameProfile>;
    static REGISTRY_ACCESS: PacketContext$Key<RegistryAccess>;
    static SERVER_INSTANCE: PacketContext$Key<MinecraftServer>;
    static VALUE: ScopedValue<PacketContext>;
    constructor(arg0: Connection)
    // private contextMap: JavaMap<PacketContext$Key<Object>, Object>;
    // private lock: ReadWriteLock;
    get<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    orElse<T extends unknown>(arg0: PacketContext$ReadKey<T>, arg1: T): T;
    orElseThrow<T extends unknown>(arg0: PacketContext$ReadKey<T>): T;
    set<T extends unknown>(arg0: PacketContext$Key<T>, arg1: T): void;
}