import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameConfig$QuickPlayVariant } from '../../../../net/minecraft/client/main/GameConfig$QuickPlayVariant.d.ts'
export class GameConfig$QuickPlayData extends Record {
    constructor(logPath: string, variant: GameConfig$QuickPlayVariant)
    // private logPath: string;
    // private variant: GameConfig$QuickPlayVariant;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEnabled(): boolean;
    logPath(): string;
    toString(): string;
    variant(): GameConfig$QuickPlayVariant;
}