import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShaderKey$LightingModel extends Enum<ShaderKey$LightingModel> {
    static DIFFUSE: ShaderKey$LightingModel;
    static DIFFUSE_LM: ShaderKey$LightingModel;
    static FULLBRIGHT: ShaderKey$LightingModel;
    static LIGHTMAP: ShaderKey$LightingModel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ShaderKey$LightingModel;
    static values(): ShaderKey$LightingModel[];
    private constructor()
    name(): "FULLBRIGHT" | "LIGHTMAP" | "DIFFUSE" | "DIFFUSE_LM";
}