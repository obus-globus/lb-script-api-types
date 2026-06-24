import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerInfo } from '../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class TransferState extends Record {
    constructor(cookies: Map<Identifier, number[]>, seenPlayers: Map<UUID, PlayerInfo>, seenInsecureChatWarning: boolean)
    // private cookies: Map<Identifier, number[]>;
    // private seenInsecureChatWarning: boolean;
    // private seenPlayers: Map<UUID, PlayerInfo>;
    cookies(): Map<Identifier, number[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    seenInsecureChatWarning(): boolean;
    seenPlayers(): Map<UUID, PlayerInfo>;
    toString(): string;
}