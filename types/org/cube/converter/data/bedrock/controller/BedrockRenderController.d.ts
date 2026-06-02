import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockRenderController$Array } from '../../../../../../org/cube/converter/data/bedrock/controller/BedrockRenderController$Array.d.ts'
export class BedrockRenderController extends Record {
    constructor(identifier: string, materialsMap: { [key: string]: string }, geometryExpression: string, textureExpressions: string[], materials: BedrockRenderController$Array[], textures: BedrockRenderController$Array[], geometries: BedrockRenderController$Array[])
    // private geometries: BedrockRenderController$Array[];
    // private geometryExpression: string;
    // private identifier: string;
    // private materials: BedrockRenderController$Array[];
    // private materialsMap: { [key: string]: string };
    // private textureExpressions: string[];
    // private textures: BedrockRenderController$Array[];
    equals(arg0: Object | null): boolean;
    geometries(): BedrockRenderController$Array[];
    geometryExpression(): string;
    hashCode(): number;
    identifier(): string;
    materials(): BedrockRenderController$Array[];
    materialsMap(): { [key: string]: string };
    textureExpressions(): string[];
    textures(): BedrockRenderController$Array[];
    toString(): string;
}