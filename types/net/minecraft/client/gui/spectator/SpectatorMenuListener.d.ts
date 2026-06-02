import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpectatorMenu } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenu.d.ts'
export interface SpectatorMenuListener extends Object{
    onSpectatorMenuClosed(menu: SpectatorMenu): void;
}