import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerStatus$Version } from '../../../../../net/minecraft/network/protocol/status/ServerStatus$Version.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
export class ServerStateService$ServerState extends Record {
    static CODEC: Codec<ServerStateService$ServerState>;
    static NOT_STARTED: ServerStateService$ServerState;
    constructor(started: boolean, players: PlayerDto[], version: ServerStatus$Version)
    // private players: PlayerDto[];
    // private started: boolean;
    // private version: ServerStatus$Version;
    equals(o: Object | null): boolean;
    hashCode(): number;
    players(): PlayerDto[];
    started(): boolean;
    toString(): string;
    version(): ServerStatus$Version;
}