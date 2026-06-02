import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UniformType extends Enum<UniformType> {
    static FLOAT: UniformType;
    static INT: UniformType;
    static MAT3: UniformType;
    static MAT4: UniformType;
    static VEC2: UniformType;
    static VEC2I: UniformType;
    static VEC3: UniformType;
    static VEC3I: UniformType;
    static VEC4: UniformType;
    static VEC4I: UniformType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UniformType;
    static values(): (Object | null)[];
    private constructor()
    name(): "INT" | "FLOAT" | "MAT3" | "MAT4" | "VEC2" | "VEC2I" | "VEC3" | "VEC3I" | "VEC4" | "VEC4I";
}