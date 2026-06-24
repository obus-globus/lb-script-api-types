import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockEntityData$Scripts$Animate } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$Scripts$Animate.d.ts'
import type { BedrockEntityData$Scripts$Scale } from '../../../../../org/cube/converter/data/bedrock/BedrockEntityData$Scripts$Scale.d.ts'
export class BedrockEntityData$Scripts extends Record {
    static emptyScript(): BedrockEntityData$Scripts;
    static parse(paramarg0: JsonObject): BedrockEntityData$Scripts;
    constructor(initialize: string[], pre_animation: string[], scale: BedrockEntityData$Scripts$Scale, animates: BedrockEntityData$Scripts$Animate[])
    // private animates: BedrockEntityData$Scripts$Animate[];
    // private initialize: string[];
    // private pre_animation: string[];
    // private scale: BedrockEntityData$Scripts$Scale;
    animates(): BedrockEntityData$Scripts$Animate[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    initialize(): string[];
    pre_animation(): string[];
    scale(): BedrockEntityData$Scripts$Scale;
    toString(): string;
}