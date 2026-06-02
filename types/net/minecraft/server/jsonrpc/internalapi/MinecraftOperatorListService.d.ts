import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export interface MinecraftOperatorListService extends Object{
    clear(clientInfo: ClientInfo): void;
    deop(nameAndId: NameAndId, clientInfo: ClientInfo): void;
    getEntries(): E[];
    op(nameAndId: NameAndId, permissionLevel: Optional<PermissionLevel>, canBypassPlayerLimit: Optional<boolean>, clientInfo: ClientInfo): void;
    op(nameAndId: NameAndId, clientInfo: ClientInfo): void;
}