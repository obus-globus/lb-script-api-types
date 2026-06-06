import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GameTimeStorage extends Object implements StorableObject {
    constructor()
    gameTime(): number;
    incrementGameTime(): void;
    onRemove(): void;
    setGameTime(arg0: number): void;
}