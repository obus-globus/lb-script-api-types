import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PotionIdMappings1_9 extends Object {
    static POTION_ID_TO_NAME: { [key: number]: string };
    static POTION_INDEX: { [key: string]: any };
    static POTION_NAME_TO_ID: { [key: string]: number };
    static getNewPotionID(paramarg0: number): number;
    static potionNameFromDamage(paramarg0: number): string;
    constructor()
}