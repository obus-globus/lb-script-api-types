import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class RewindType extends Enum<RewindType> {
    static Player: RewindType;
    static Vehicle: RewindType;
    static getByName(paramarg0: string): RewindType;
    static getByName(paramarg0: string, paramarg1: RewindType): RewindType;
    static getByValue(paramarg0: number): RewindType;
    static getByValue(paramarg0: number, paramarg1: RewindType): RewindType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RewindType;
    static values(): RewindType[];
    private constructor(arg2: number)
    private constructor(arg2: RewindType)
    readonly value: number;
    getValue(): number;
    name(): "Player" | "Vehicle";
}