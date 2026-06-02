import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface ServerTickEvents$EndLevelTick extends Object{
    onEndTick(arg0: ServerLevel): void;
}