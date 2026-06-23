import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PermissionContext$Key } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PermissionContextKey<T extends unknown> extends Record implements PermissionContext$Key<T> {
    static BLOCK_POSITION: PermissionContext$Key<BlockPos>;
    static COMMAND_SOURCE_STACK: PermissionContext$Key<CommandSourceStack>;
    static DEFAULT_COMMAND_ENTITY_KEYS: PermissionContext$Key<Object>[];
    static DEFAULT_COMMAND_KEYS: PermissionContext$Key<Object>[];
    static DEFAULT_COMMON_KEYS: PermissionContext$Key<Object>[];
    static DEFAULT_ENTITY_KEYS: PermissionContext$Key<Object>[];
    static DEFAULT_SERVER_ENTITY_KEYS: PermissionContext$Key<Object>[];
    static ENTITY: PermissionContext$Key<Entity>;
    static LEVEL: PermissionContext$Key<Level>;
    static NAME: PermissionContext$Key<string>;
    static POSITION: PermissionContext$Key<Vec3>;
    static SERVER: PermissionContext$Key<MinecraftServer>;
    constructor(id: Identifier)
    // private id: Identifier;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}