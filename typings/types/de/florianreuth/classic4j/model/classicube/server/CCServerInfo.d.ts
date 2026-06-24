import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCServerInfo extends Record {
    constructor(hash: string, maxPlayers: number, name: string, players: number, software: string, uptime: number, countryCode: string, web: boolean, featured: boolean, ip: string, port: number, mpPass: string)
    // private countryCode: string;
    // private featured: boolean;
    // private hash: string;
    // private ip: string;
    // private maxPlayers: number;
    // private mpPass: string;
    // private name: string;
    // private players: number;
    // private port: number;
    // private software: string;
    // private uptime: number;
    // private web: boolean;
    countryCode(): string;
    equals(arg0: Object | null): boolean;
    featured(): boolean;
    hash(): string;
    hashCode(): number;
    ip(): string;
    maxPlayers(): number;
    mpPass(): string;
    name(): string;
    players(): number;
    port(): number;
    software(): string;
    toString(): string;
    uptime(): number;
    web(): boolean;
}