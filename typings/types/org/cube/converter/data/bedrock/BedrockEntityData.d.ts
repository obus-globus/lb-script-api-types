import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockEntityData$RenderController } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$RenderController.d.ts'
import type { BedrockEntityData$Scripts } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$Scripts.d.ts'
export class BedrockEntityData extends Object {
    constructor(arg0: string, arg1: BedrockEntityData$Scripts, arg2: BedrockEntityData$RenderController[], arg3: { [key: string]: string }, arg4: { [key: string]: string }, arg5: { [key: string]: string }, arg6: { [key: string]: string })
    readonly animations: { [key: string]: string };
    readonly controllers: BedrockEntityData$RenderController[];
    readonly geometries: { [key: string]: string };
    readonly identifier: string;
    readonly materials: { [key: string]: string };
    readonly scripts: BedrockEntityData$Scripts;
    readonly textures: { [key: string]: string };
    getAnimations(): { [key: string]: string };
    getControllers(): BedrockEntityData$RenderController[];
    getGeometries(): { [key: string]: string };
    getIdentifier(): string;
    getMaterials(): { [key: string]: string };
    getScripts(): BedrockEntityData$Scripts;
    getTextures(): { [key: string]: string };
    toString(): string;
}