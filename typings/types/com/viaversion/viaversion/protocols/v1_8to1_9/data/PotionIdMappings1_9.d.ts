import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PotionIdMappings1_9 extends Object {
    static POTION_ID_TO_NAME: JavaMap<number, string>;
    static POTION_INDEX: JavaMap<any, any>;
    static POTION_NAME_TO_ID: JavaMap<string, number>;
    static getNewPotionID(paramarg0: number): number;
    static potionNameFromDamage(paramarg0: number): string;
    constructor()
}