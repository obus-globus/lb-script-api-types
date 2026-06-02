import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
import type { RootBedrockComponent } from '../../../../../../net/lenni0451/mcstructs_bedrock/text/components/RootBedrockComponent.d.ts'
export class BedrockTextDeserializer extends Object implements JsonDeserializer<RootBedrockComponent> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): RootBedrockComponent;
    // private deserialize(arg0: JsonObject, arg1: JsonDeserializationContext): BedrockComponent;
}