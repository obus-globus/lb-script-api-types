import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ShaderType } from '../../../../../net/irisshaders/iris/gl/shader/ShaderType.d.ts'
export class PatchShaderType extends Enum<PatchShaderType> {
    static COMPUTE: PatchShaderType;
    static FRAGMENT: PatchShaderType;
    static GEOMETRY: PatchShaderType;
    static TESS_CONTROL: PatchShaderType;
    static TESS_EVAL: PatchShaderType;
    static VERTEX: PatchShaderType;
    static fromGlShaderType(paramarg0: ShaderType): (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PatchShaderType;
    static values(): (Object | null)[];
    private constructor(arg2: ShaderType, arg3: string)
    extension: string;
    glShaderType: ShaderType;
    name(): "VERTEX" | "GEOMETRY" | "TESS_CONTROL" | "TESS_EVAL" | "FRAGMENT" | "COMPUTE";
}