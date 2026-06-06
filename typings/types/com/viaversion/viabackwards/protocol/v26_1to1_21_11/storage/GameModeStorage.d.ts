import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GameModeStorage extends Object implements StorableObject {
    constructor()
    gameMode(): number;
    onRemove(): void;
    setGameMode(arg0: number): void;
}