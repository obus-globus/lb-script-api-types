import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutablePermissionContext } from '../../../../../net/fabricmc/fabric/api/permission/v1/MutablePermissionContext.d.ts'
import type { PermissionContext } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContext$Key } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
import type { PermissionContext$Type } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityPermissionContext extends Object implements PermissionContext {
    static BLOCK_POSITION: PermissionContext$Key<BlockPos>;
    static COMMAND_SOURCE_STACK: PermissionContext$Key<CommandSourceStack>;
    static ENTITY: PermissionContext$Key<Entity>;
    static LEVEL: PermissionContext$Key<Level>;
    static NAME: PermissionContext$Key<string>;
    static POSITION: PermissionContext$Key<Vec3>;
    static SERVER: PermissionContext$Key<MinecraftServer>;
    static create(paramarg0: UUID, paramarg1: PermissionContext$Type, paramarg2: PermissionLevel): MutablePermissionContext;
    static key(paramarg0: Identifier): PermissionContext$Key<Object>;
    static offlinePlayer(paramarg0: UUID, paramarg1: MinecraftServer): CompletableFuture<MutablePermissionContext>;
    static offlinePlayer(paramarg0: NameAndId, paramarg1: MinecraftServer): CompletableFuture<MutablePermissionContext>;
    constructor(arg0: Entity)
    // private entity: Entity;
    // private keys: PermissionContext$Key<Object>[];
    // private permissionLevel: PermissionLevel;
    // private server: MinecraftServer;
    // private type: PermissionContext$Type;
    get<T extends unknown>(arg0: PermissionContext$Key<T>): T;
    getPermissionContext(): PermissionContext;
    keys(): PermissionContext$Key<Object>[];
    mutable(): MutablePermissionContext;
    orElse<T extends unknown>(arg0: PermissionContext$Key<T>, arg1: T): T;
    permissionLevel(): PermissionLevel;
    type(): PermissionContext$Type;
    uuid(): UUID;
}