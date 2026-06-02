import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BedrockEntityData } from '../../../../../../../org/cube/converter/data/bedrock/BedrockEntityData.d.ts'
export class BedrockEntityParser extends Object {
    static parse(paramarg0: JsonObject): BedrockEntityData;
    static parse(paramarg0: string): BedrockEntityData;
    constructor()
}