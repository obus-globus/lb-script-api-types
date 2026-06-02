import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { ServerOpListEntry } from '../../../../../net/minecraft/server/players/ServerOpListEntry.d.ts'
export class OperatorService$OperatorDto extends Record {
    static CODEC: MapCodec<OperatorService$OperatorDto>;
    static from(paramserverOpListEntry: ServerOpListEntry): OperatorService$OperatorDto;
    constructor(player: PlayerDto, permissionLevel: Optional<PermissionLevel>, bypassesPlayerLimit: Optional<boolean>)
    // private bypassesPlayerLimit: Optional<boolean>;
    // private permissionLevel: Optional<PermissionLevel>;
    // private player: PlayerDto;
    bypassesPlayerLimit(): Optional<boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    permissionLevel(): Optional<PermissionLevel>;
    player(): PlayerDto;
    toString(): string;
}