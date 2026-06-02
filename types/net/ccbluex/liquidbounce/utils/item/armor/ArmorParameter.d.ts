import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorParameter$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorParameter$Companion.d.ts'
export class ArmorParameter extends Record {
    static Companion: ArmorParameter$Companion;
    static ZERO: ArmorParameter;
    constructor(defensePoints: number, toughness: number)
    // private defensePoints: number;
    /*not mapped: */ defensePoints(): number;
    // private toughness: number;
    /*not mapped: */ toughness(): number;
    component1(): number;
    component2(): number;
    copy(defensePoints: number, toughness: number): ArmorParameter;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}