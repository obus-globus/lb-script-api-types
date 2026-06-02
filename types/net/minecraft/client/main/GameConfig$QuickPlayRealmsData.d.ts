import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameConfig$QuickPlayVariant } from '../../../../net/minecraft/client/main/GameConfig$QuickPlayVariant.d.ts'
export class GameConfig$QuickPlayRealmsData extends Record implements GameConfig$QuickPlayVariant {
    static DISABLED: GameConfig$QuickPlayVariant;
    constructor(realmId: string)
    // private realmId: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEnabled(): boolean;
    realmId(): string;
    toString(): string;
}