import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { ShaderAttributeInputs } from '../../../../../net/irisshaders/iris/gl/state/ShaderAttributeInputs.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { PatchShaderType } from '../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
import type { TextureStage } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class TransformPatcher extends Object {
    static patchComposite(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: TextureStage, paramarg5: JavaMap<Tri<string, TextureType, TextureStage>, string>): JavaMap<PatchShaderType, string>;
    static patchCompute(paramarg0: string, paramarg1: string, paramarg2: TextureStage, paramarg3: JavaMap<Tri<string, TextureType, TextureStage>, string>): string;
    static patchDHGeneric(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: JavaMap<Tri<string, TextureType, TextureStage>, string>): JavaMap<PatchShaderType, string>;
    static patchDHTerrain(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: JavaMap<Tri<string, TextureType, TextureStage>, string>): JavaMap<PatchShaderType, string>;
    static patchSodium(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: AlphaTest, paramarg7: JavaMap<Tri<string, TextureType, TextureStage>, string>, paramarg8: boolean): JavaMap<PatchShaderType, string>;
    static patchVanilla(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: AlphaTest, paramarg7: boolean, paramarg8: boolean, paramarg9: boolean, paramarg10: ShaderAttributeInputs, paramarg11: JavaMap<Tri<string, TextureType, TextureStage>, string>): JavaMap<PatchShaderType, string>;
    constructor()
}