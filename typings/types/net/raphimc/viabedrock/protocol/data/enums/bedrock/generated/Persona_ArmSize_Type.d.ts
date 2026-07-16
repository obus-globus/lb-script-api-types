import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Persona_ArmSize_Type extends Enum<Persona_ArmSize_Type> {
    static Slim: Persona_ArmSize_Type;
    static Wide: Persona_ArmSize_Type;
    static getByName(paramarg0: string): Persona_ArmSize_Type;
    static getByName(paramarg0: string, paramarg1: Persona_ArmSize_Type): Persona_ArmSize_Type;
    static getByValue(paramarg0: number): Persona_ArmSize_Type;
    static getByValue(paramarg0: number, paramarg1: Persona_ArmSize_Type): Persona_ArmSize_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Persona_ArmSize_Type;
    static values(): Persona_ArmSize_Type[];
    private constructor(arg2: number)
    private constructor(arg2: Persona_ArmSize_Type)
    readonly value: number;
    getValue(): number;
    name(): "Slim" | "Wide";
}