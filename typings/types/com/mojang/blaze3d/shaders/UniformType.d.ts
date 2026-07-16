import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UniformType extends Enum<UniformType> {
    static TEXEL_BUFFER: UniformType;
    static UNIFORM_BUFFER: UniformType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UniformType;
    static values(): UniformType[];
    private constructor()
    name(): "UNIFORM_BUFFER" | "TEXEL_BUFFER";
}