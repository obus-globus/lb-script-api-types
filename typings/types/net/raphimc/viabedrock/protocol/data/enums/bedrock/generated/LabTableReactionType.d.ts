import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LabTableReactionType extends Enum<LabTableReactionType> {
    static Bleach: LabTableReactionType;
    static ElephantToothpaste: LabTableReactionType;
    static Fertilizer: LabTableReactionType;
    static HeatBlock: LabTableReactionType;
    static IceBomb: LabTableReactionType;
    static MagnesiumSalts: LabTableReactionType;
    static MiscExplosion: LabTableReactionType;
    static MiscFire: LabTableReactionType;
    static MiscLargeSmoke: LabTableReactionType;
    static MiscLava: LabTableReactionType;
    static MiscMystical: LabTableReactionType;
    static MiscSmoke: LabTableReactionType;
    static None: LabTableReactionType;
    static getByName(paramarg0: string): LabTableReactionType;
    static getByName(paramarg0: string, paramarg1: LabTableReactionType): LabTableReactionType;
    static getByValue(paramarg0: number): LabTableReactionType;
    static getByValue(paramarg0: number, paramarg1: LabTableReactionType): LabTableReactionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LabTableReactionType;
    static values(): LabTableReactionType[];
    private constructor(arg2: number)
    private constructor(arg2: LabTableReactionType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "IceBomb" | "Bleach" | "ElephantToothpaste" | "Fertilizer" | "HeatBlock" | "MagnesiumSalts" | "MiscFire" | "MiscExplosion" | "MiscLava" | "MiscMystical" | "MiscSmoke" | "MiscLargeSmoke";
}