import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Persona_AnimationExpression extends Enum<Persona_AnimationExpression> {
    static Blinking: Persona_AnimationExpression;
    static Linear: Persona_AnimationExpression;
    static getByName(paramarg0: string): Persona_AnimationExpression;
    static getByName(paramarg0: string, paramarg1: Persona_AnimationExpression): Persona_AnimationExpression;
    static getByValue(paramarg0: number): Persona_AnimationExpression;
    static getByValue(paramarg0: number, paramarg1: Persona_AnimationExpression): Persona_AnimationExpression;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Persona_AnimationExpression;
    static values(): Persona_AnimationExpression[];
    private constructor(arg2: number)
    private constructor(arg2: Persona_AnimationExpression)
    readonly value: number;
    getValue(): number;
    name(): "Linear" | "Blinking";
}