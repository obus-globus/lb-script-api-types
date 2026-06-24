import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientInformation } from '../../../../net/minecraft/server/level/ClientInformation.d.ts'
export class CommonListenerCookie extends Record {
    static createInitial(paramgameProfile: GameProfile, paramtransferred: boolean): CommonListenerCookie;
    constructor(gameProfile: GameProfile, latency: number, clientInformation: ClientInformation, transferred: boolean)
    // private clientInformation: ClientInformation;
    // private gameProfile: GameProfile;
    // private latency: number;
    // private transferred: boolean;
    clientInformation(): ClientInformation;
    equals(o: Object | null): boolean;
    gameProfile(): GameProfile;
    hashCode(): number;
    latency(): number;
    toString(): string;
    transferred(): boolean;
}