import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UniformType extends Enum<UniformType> {
    static TEXEL_BUFFER: UniformType;
    static UNIFORM_BUFFER: UniformType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UniformType;
    static values(): UniformType[];
    private constructor()
    name(): "UNIFORM_BUFFER" | "TEXEL_BUFFER";
}