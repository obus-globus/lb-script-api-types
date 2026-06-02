import type { Object } from '../../../java/lang/Object.d.ts'
export interface ServerInfo extends Object{
    getMaxPlayers(): number;
    getMotd(): string;
    getPlayerCount(): number;
    getServerVersion(): string;
}