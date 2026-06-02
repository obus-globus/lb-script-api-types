import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutablePermissionContext } from '../../../../../net/fabricmc/fabric/api/permission/v1/MutablePermissionContext.d.ts'
import type { PermissionContext } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContext$Key } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
import type { PermissionContext$Type } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class OverriddenPermissionContext extends Record implements MutablePermissionContext {
    static BLOCK_POSITION: PermissionContext$Key<BlockPos>;
    static COMMAND_SOURCE_STACK: PermissionContext$Key<CommandSourceStack>;
    static ENTITY: PermissionContext$Key<Entity>;
    static LEVEL: PermissionContext$Key<Level>;
    static NAME: PermissionContext$Key<string>;
    static POSITION: PermissionContext$Key<Vec3>;
    static SERVER: PermissionContext$Key<MinecraftServer>;
    constructor(arg0: PermissionContext)
    constructor(context: PermissionContext, overrides: Map<PermissionContext$Key<Object>, Object>)
    // private context: PermissionContext;
    // private overrides: Map<PermissionContext$Key<Object>, Object>;
    context(): PermissionContext;
    equals(arg0: Object | null): boolean;
    get<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>): T;
    hashCode(): number;
    keys(): PermissionContext$Key<Object>[];
    overrides(): Map<PermissionContext$Key<Object>, Object>;
    permissionLevel(): PermissionLevel;
    set<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>, arg1: T): MutablePermissionContext;
    toString(): string;
    type(): PermissionContext$Type;
    uuid(): UUID;
}