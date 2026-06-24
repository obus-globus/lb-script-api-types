import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GameConfig } from '../../../../net/minecraft/client/main/GameConfig.d.ts'
export class ClientShutdownWatchdog extends Object {
    static startShutdownWatchdog(paramcallsite: string, paramforceShutdown: boolean, paramminecraft: Minecraft, paramgameConfig: GameConfig, parammainThreadId: number): void;
    constructor()
}