import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerInfo } from '../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class TransferState extends Record {
    constructor(cookies: JavaMap<Identifier, number[]>, seenPlayers: JavaMap<UUID, PlayerInfo>, seenInsecureChatWarning: boolean)
    // private cookies: JavaMap<Identifier, number[]>;
    // private seenInsecureChatWarning: boolean;
    // private seenPlayers: JavaMap<UUID, PlayerInfo>;
    cookies(): JavaMap<Identifier, number[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    seenInsecureChatWarning(): boolean;
    seenPlayers(): JavaMap<UUID, PlayerInfo>;
    toString(): string;
}