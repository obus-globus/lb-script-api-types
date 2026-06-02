import type { Object } from '../../../../java/lang/Object.d.ts'
export class AccountDetails extends Object {
    constructor()
    // private fiveZigCape: boolean;
    readonly hypixelLevel: number;
    readonly hypixelRank: string;
    // private labymodCape: boolean;
    readonly mineplexLevel: number;
    readonly mineplexRank: string;
    getHypixelLevel(): number;
    getHypixelRank(): string;
    getMineplexLevel(): number;
    getMineplexRank(): string;
    hasFiveZigCape(): boolean;
    hasLabyModCape(): boolean;
    toString(): string;
}