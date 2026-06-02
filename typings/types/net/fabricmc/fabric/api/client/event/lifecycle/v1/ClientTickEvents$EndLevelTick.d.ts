import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export interface ClientTickEvents$EndLevelTick extends Object{
    onEndTick(arg0: ClientLevel): void;
}