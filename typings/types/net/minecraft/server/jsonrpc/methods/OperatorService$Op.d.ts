import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export class OperatorService$Op extends Record {
    private constructor(user: NameAndId, permissionLevel: Optional<PermissionLevel>, bypassesPlayerLimit: Optional<boolean>)
    // private bypassesPlayerLimit: Optional<boolean>;
    // private permissionLevel: Optional<PermissionLevel>;
    // private user: NameAndId;
    bypassesPlayerLimit(): Optional<boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    permissionLevel(): Optional<PermissionLevel>;
    toString(): string;
    user(): NameAndId;
}