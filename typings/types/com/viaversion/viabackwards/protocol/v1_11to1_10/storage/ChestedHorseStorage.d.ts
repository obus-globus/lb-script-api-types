import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChestedHorseStorage extends Object implements StorableObject {
    constructor()
    readonly chested: boolean;
    readonly liamaCarpetColor: number;
    readonly liamaStrength: number;
    readonly liamaVariant: number;
    getLiamaCarpetColor(): number;
    getLiamaStrength(): number;
    getLiamaVariant(): number;
    isChested(): boolean;
    onRemove(): void;
    setChested(arg0: boolean): void;
    setLiamaCarpetColor(arg0: number): void;
    setLiamaStrength(arg0: number): void;
    setLiamaVariant(arg0: number): void;
    toString(): string;
}