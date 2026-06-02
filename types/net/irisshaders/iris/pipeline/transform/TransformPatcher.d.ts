import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { ShaderAttributeInputs } from '../../../../../net/irisshaders/iris/gl/state/ShaderAttributeInputs.d.ts'
import type { PatchShaderType } from '../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
import type { TextureStage } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class TransformPatcher extends Object {
    static patchComposite(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: TextureStage, paramarg5: Map<Object | null, string>): { [key in PatchShaderType]: string };
    static patchCompute(paramarg0: string, paramarg1: string, paramarg2: TextureStage, paramarg3: Map<Object | null, string>): string;
    static patchDHGeneric(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: Map<Object | null, string>): { [key in PatchShaderType]: string };
    static patchDHTerrain(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: Map<Object | null, string>): { [key in PatchShaderType]: string };
    static patchSodium(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: AlphaTest, paramarg7: Map<Object | null, string>): { [key in PatchShaderType]: string };
    static patchVanilla(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: AlphaTest, paramarg7: boolean, paramarg8: boolean, paramarg9: boolean, paramarg10: ShaderAttributeInputs, paramarg11: Map<Object | null, string>): { [key in PatchShaderType]: string };
    constructor()
}