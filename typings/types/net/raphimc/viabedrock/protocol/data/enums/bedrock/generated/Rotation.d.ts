import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Rotation extends Enum<Rotation> {
    static Clockwise180: Rotation;
    static Clockwise90: Rotation;
    static CounterClockwise90: Rotation;
    static None: Rotation;
    static Rotate180: Rotation;
    static Rotate270: Rotation;
    static Rotate90: Rotation;
    static getByName(paramarg0: string): Rotation;
    static getByName(paramarg0: string, paramarg1: Rotation): Rotation;
    static getByValue(paramarg0: number): Rotation;
    static getByValue(paramarg0: number, paramarg1: Rotation): Rotation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Rotation;
    static values(): Rotation[];
    private constructor(arg2: number)
    private constructor(arg2: Rotation)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Rotate90" | "Rotate180" | "Rotate270" | "Clockwise90" | "Clockwise180" | "CounterClockwise90";
}