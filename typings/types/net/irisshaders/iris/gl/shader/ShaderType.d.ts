import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShaderType extends Enum<ShaderType> {
    static COMPUTE: ShaderType;
    static FRAGMENT: ShaderType;
    static GEOMETRY: ShaderType;
    static TESSELATION_CONTROL: ShaderType;
    static TESSELATION_EVAL: ShaderType;
    static VERTEX: ShaderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ShaderType;
    static values(): ShaderType[];
    private constructor(arg2: number)
    id: number;
    name(): "VERTEX" | "GEOMETRY" | "FRAGMENT" | "COMPUTE" | "TESSELATION_CONTROL" | "TESSELATION_EVAL";
}