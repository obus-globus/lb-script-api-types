import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface HasCustomInventoryScreen extends Object{
    openCustomInventoryScreen(player: Player): void;
}