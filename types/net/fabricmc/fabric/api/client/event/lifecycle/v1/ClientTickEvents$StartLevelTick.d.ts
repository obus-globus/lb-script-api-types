import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export interface ClientTickEvents$StartLevelTick extends Object{
    onStartTick(arg0: ClientLevel): void;
}