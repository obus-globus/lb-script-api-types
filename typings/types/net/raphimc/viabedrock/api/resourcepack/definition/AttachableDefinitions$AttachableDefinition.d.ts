import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockAttachableData } from '../../../../../../org/cube/converter/data/bedrock/BedrockAttachableData.d.ts'
export class AttachableDefinitions$AttachableDefinition extends Record {
    constructor(identifier: string, attachableData: BedrockAttachableData)
    // private attachableData: BedrockAttachableData;
    // private identifier: string;
    attachableData(): BedrockAttachableData;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}