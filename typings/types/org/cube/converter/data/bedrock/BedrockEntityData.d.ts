import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockEntityData$RenderController } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$RenderController.d.ts'
import type { BedrockEntityData$Scripts } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$Scripts.d.ts'
export class BedrockEntityData extends Object {
    constructor(arg0: string, arg1: BedrockEntityData$Scripts, arg2: BedrockEntityData$RenderController[], arg3: JavaMap<string, string>, arg4: JavaMap<string, string>, arg5: JavaMap<string, string>, arg6: JavaMap<string, string>)
    readonly animations: JavaMap<string, string>;
    readonly controllers: BedrockEntityData$RenderController[];
    readonly geometries: JavaMap<string, string>;
    readonly identifier: string;
    readonly materials: JavaMap<string, string>;
    readonly scripts: BedrockEntityData$Scripts;
    readonly textures: JavaMap<string, string>;
    getAnimations(): JavaMap<string, string>;
    getControllers(): BedrockEntityData$RenderController[];
    getGeometries(): JavaMap<string, string>;
    getIdentifier(): string;
    getMaterials(): JavaMap<string, string>;
    getScripts(): BedrockEntityData$Scripts;
    getTextures(): JavaMap<string, string>;
    toString(): string;
}