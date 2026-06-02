import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LegacyServerPinger$Output extends Object{
    handleResponse(protocolVersion: number, gameVersion: string, motd: string, players: number, maxPlayers: number): void;
}