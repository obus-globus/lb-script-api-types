import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameConfig$QuickPlayVariant } from '../../../../net/minecraft/client/main/GameConfig$QuickPlayVariant.d.ts'
export class GameConfig$QuickPlayMultiplayerData extends Record implements GameConfig$QuickPlayVariant {
    static DISABLED: GameConfig$QuickPlayVariant;
    constructor(serverAddress: string)
    // private serverAddress: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEnabled(): boolean;
    serverAddress(): string;
    toString(): string;
}