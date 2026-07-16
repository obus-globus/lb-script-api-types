import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Persona_AnimatedTextureType extends Enum<Persona_AnimatedTextureType> {
    static Body128x128: Persona_AnimatedTextureType;
    static Body32x32: Persona_AnimatedTextureType;
    static Face: Persona_AnimatedTextureType;
    static getByName(paramarg0: string): Persona_AnimatedTextureType;
    static getByName(paramarg0: string, paramarg1: Persona_AnimatedTextureType): Persona_AnimatedTextureType;
    static getByValue(paramarg0: number): Persona_AnimatedTextureType;
    static getByValue(paramarg0: number, paramarg1: Persona_AnimatedTextureType): Persona_AnimatedTextureType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Persona_AnimatedTextureType;
    static values(): Persona_AnimatedTextureType[];
    private constructor(arg2: number)
    private constructor(arg2: Persona_AnimatedTextureType)
    readonly value: number;
    getValue(): number;
    name(): "Face" | "Body32x32" | "Body128x128";
}