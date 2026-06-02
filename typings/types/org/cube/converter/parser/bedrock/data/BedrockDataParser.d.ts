import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockAttachableData } from '../../../../../../org/cube/converter/data/bedrock/BedrockAttachableData.d.ts'
import type { BedrockEntityData } from '../../../../../../org/cube/converter/data/bedrock/BedrockEntityData.d.ts'
export class BedrockDataParser extends Object {
    static parseAttachable(paramarg0: string): BedrockAttachableData;
    static parseEntity(paramarg0: string): BedrockEntityData;
    constructor()
}