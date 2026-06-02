import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class PlayerMap extends Object {
    constructor()
    // private players: Object2BooleanMap<ServerPlayer>;
    addPlayer(player: ServerPlayer, ignored: boolean): void;
    getAllPlayers(): ServerPlayer[];
    ignorePlayer(player: ServerPlayer): void;
    ignored(player: ServerPlayer): boolean;
    ignoredOrUnknown(player: ServerPlayer): boolean;
    removePlayer(player: ServerPlayer): void;
    unIgnorePlayer(player: ServerPlayer): void;
}