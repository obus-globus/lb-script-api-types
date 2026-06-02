import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ShaderType extends Enum<ShaderType> {
    static FRAGMENT: ShaderType;
    static GEOMETRY: ShaderType;
    static TESS_CONTROL: ShaderType;
    static TESS_EVALUATION: ShaderType;
    static VERTEX: ShaderType;
    static fromGlShaderType(paramarg0: number): ShaderType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShaderType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    id: number;
    name(): "VERTEX" | "GEOMETRY" | "TESS_CONTROL" | "TESS_EVALUATION" | "FRAGMENT";
}