import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class SleepStatus extends Object {
    constructor()
    // private activePlayers: number;
    // private sleepingPlayers: number;
    amountSleeping(): number;
    areEnoughDeepSleeping(sleepPercentageNeeded: number, players: ServerPlayer[]): boolean;
    areEnoughSleeping(sleepPercentageNeeded: number): boolean;
    removeAllSleepers(): void;
    sleepersNeeded(sleepPercentageNeeded: number): number;
    update(players: ServerPlayer[]): boolean;
}