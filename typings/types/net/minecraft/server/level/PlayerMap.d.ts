import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class PlayerMap extends Object {
    constructor()
    // private players: JavaMap<any, any>;
    addPlayer(player: ServerPlayer, ignored: boolean): void;
    getAllPlayers(): ServerPlayer[];
    ignorePlayer(player: ServerPlayer): void;
    ignored(player: ServerPlayer): boolean;
    ignoredOrUnknown(player: ServerPlayer): boolean;
    removePlayer(player: ServerPlayer): void;
    unIgnorePlayer(player: ServerPlayer): void;
}