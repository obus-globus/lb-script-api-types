import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GeneratorType extends Enum<GeneratorType> {
    static Flat: GeneratorType;
    static Legacy: GeneratorType;
    static Nether: GeneratorType;
    static Overworld: GeneratorType;
    static TheEnd: GeneratorType;
    static Undefined: GeneratorType;
    static Void: GeneratorType;
    static getByName(paramarg0: string): GeneratorType;
    static getByName(paramarg0: string, paramarg1: GeneratorType): GeneratorType;
    static getByValue(paramarg0: number): GeneratorType;
    static getByValue(paramarg0: number, paramarg1: GeneratorType): GeneratorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GeneratorType;
    static values(): GeneratorType[];
    private constructor(arg2: number)
    private constructor(arg2: GeneratorType)
    readonly value: number;
    getValue(): number;
    name(): "Legacy" | "Overworld" | "Flat" | "Nether" | "TheEnd" | "Void" | "Undefined";
}