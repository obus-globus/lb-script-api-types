import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerPlayerEvents$Join extends Object{
    onJoin(arg0: ServerPlayer): void;
}