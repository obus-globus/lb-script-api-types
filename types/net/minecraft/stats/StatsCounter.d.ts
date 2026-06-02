import type { Object } from '../../../java/lang/Object.d.ts'
import type { Stat } from '../../../net/minecraft/stats/Stat.d.ts'
import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
export class StatsCounter extends Object {
    constructor()
    // private stats: Object2IntMap<Stat<Object>>;
    getValue(stat: Stat<Object>): number;
    getValue<T extends Object | number | string | boolean>(type: Stat<T>[], key: T): number;
    increment(player: Player, stat: Stat<Object>, count: number): void;
    setValue(player: Player, stat: Stat<Object>, count: number): void;
}