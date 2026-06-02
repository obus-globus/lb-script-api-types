import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TicketType extends Record {
    static DRAGON: TicketType;
    static ENDER_PEARL: TicketType;
    static FLAG_CAN_EXPIRE_IF_UNLOADED: number;
    static FLAG_KEEP_DIMENSION_ACTIVE: number;
    static FLAG_LOADING: number;
    static FLAG_PERSIST: number;
    static FLAG_SIMULATION: number;
    static FORCED: TicketType;
    static NO_TIMEOUT: number;
    static PLAYER_LOADING: TicketType;
    static PLAYER_SIMULATION: TicketType;
    static PLAYER_SPAWN: TicketType;
    static PORTAL: TicketType;
    static SPAWN_SEARCH: TicketType;
    static UNKNOWN: TicketType;
    // private flags: number;
    // private timeout: number;
    canExpireIfUnloaded(): boolean;
    doesLoad(): boolean;
    doesSimulate(): boolean;
    equals(o: Object | null): boolean;
    flags(): number;
    hasTimeout(): boolean;
    hashCode(): number;
    persist(): boolean;
    shouldKeepDimensionActive(): boolean;
    timeout(): number;
    toString(): string;
}