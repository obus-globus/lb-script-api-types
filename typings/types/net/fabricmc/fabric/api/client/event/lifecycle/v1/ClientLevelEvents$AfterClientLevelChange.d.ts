import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export interface ClientLevelEvents$AfterClientLevelChange extends Object{
    afterLevelChange(arg0: Minecraft, arg1: ClientLevel): void;
}