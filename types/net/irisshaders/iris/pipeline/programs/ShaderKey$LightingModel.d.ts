import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShaderKey$LightingModel extends Enum<ShaderKey$LightingModel> {
    static DIFFUSE: ShaderKey$LightingModel;
    static DIFFUSE_LM: ShaderKey$LightingModel;
    static FULLBRIGHT: ShaderKey$LightingModel;
    static LIGHTMAP: ShaderKey$LightingModel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShaderKey$LightingModel;
    static values(): (Object | null)[];
    private constructor()
    name(): "FULLBRIGHT" | "LIGHTMAP" | "DIFFUSE" | "DIFFUSE_LM";
}