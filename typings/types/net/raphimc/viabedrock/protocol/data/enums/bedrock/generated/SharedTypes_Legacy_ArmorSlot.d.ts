import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_Legacy_ArmorSlot extends Enum<SharedTypes_Legacy_ArmorSlot> {
    static Body: SharedTypes_Legacy_ArmorSlot;
    static Feet: SharedTypes_Legacy_ArmorSlot;
    static Head: SharedTypes_Legacy_ArmorSlot;
    static Legs: SharedTypes_Legacy_ArmorSlot;
    static Torso: SharedTypes_Legacy_ArmorSlot;
    static getByName(paramarg0: string): SharedTypes_Legacy_ArmorSlot;
    static getByName(paramarg0: string, paramarg1: SharedTypes_Legacy_ArmorSlot): SharedTypes_Legacy_ArmorSlot;
    static getByValue(paramarg0: number): SharedTypes_Legacy_ArmorSlot;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_Legacy_ArmorSlot): SharedTypes_Legacy_ArmorSlot;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharedTypes_Legacy_ArmorSlot;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_Legacy_ArmorSlot)
    readonly value: number;
    getValue(): number;
    name(): "Head" | "Torso" | "Legs" | "Feet" | "Body";
}