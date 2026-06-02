import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockEntityData } from '../../../../../../org/cube/converter/data/bedrock/BedrockEntityData.d.ts'
export class EntityDefinitions$EntityDefinition extends Record {
    constructor(identifier: string, entityData: BedrockEntityData)
    // private entityData: BedrockEntityData;
    // private identifier: string;
    entityData(): BedrockEntityData;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}