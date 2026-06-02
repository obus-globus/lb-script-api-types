import type { RealmsClient } from '../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GameConfig$QuickPlayData } from '../../../net/minecraft/client/main/GameConfig$QuickPlayData.d.ts'
export class Minecraft$GameLoadCookie extends Record {
    private constructor(realmsClient: RealmsClient, quickPlayData: GameConfig$QuickPlayData)
    // private quickPlayData: GameConfig$QuickPlayData;
    // private realmsClient: RealmsClient;
    equals(o: Object | null): boolean;
    hashCode(): number;
    quickPlayData(): GameConfig$QuickPlayData;
    realmsClient(): RealmsClient;
    toString(): string;
}