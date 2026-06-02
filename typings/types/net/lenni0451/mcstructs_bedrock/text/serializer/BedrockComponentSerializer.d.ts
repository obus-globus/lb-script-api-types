import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
import type { RootBedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/components/RootBedrockComponent.d.ts'
export class BedrockComponentSerializer extends Object {
    static deserialize(paramarg0: JsonElement): RootBedrockComponent;
    static deserialize(paramarg0: string): RootBedrockComponent;
    static deserializeLenientReader(paramarg0: string): RootBedrockComponent;
    static deserializeReader(paramarg0: string): RootBedrockComponent;
    static deserializeReader(paramarg0: string, paramarg1: boolean): RootBedrockComponent;
    static serialize(paramarg0: BedrockComponent): string;
    static serializeJson(paramarg0: BedrockComponent): JsonElement;
    constructor()
}