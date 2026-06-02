import type { MinecraftServer } from '../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { TickRateManager } from '../../../net/minecraft/world/TickRateManager.d.ts'
export class ServerTickRateManager extends TickRateManager {
    static MIN_TICKRATE: number;
    constructor(server: MinecraftServer)
    // private previousIsFrozen: boolean;
    // private remainingSprintTicks: number;
    // private scheduledCurrentSprintTicks: number;
    // private server: MinecraftServer;
    // private sprintTickStartTime: number;
    // private sprintTimeSpend: number;
    checkShouldSprintThisTick(): boolean;
    endTickWork(): void;
    // private finishTickSprint(): void;
    isSprinting(): boolean;
    requestGameToSprint(time: number): boolean;
    setFrozen(frozen: boolean): void;
    setTickRate(rate: number): void;
    stepGameIfPaused(ticks: number): boolean;
    stopSprinting(): boolean;
    stopStepping(): boolean;
    updateJoiningPlayer(player: ServerPlayer): void;
    // private updateStateToClients(): void;
    // private updateStepTicks(): void;
}