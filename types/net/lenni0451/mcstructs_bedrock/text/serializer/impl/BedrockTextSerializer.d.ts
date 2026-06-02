import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
export class BedrockTextSerializer extends Object implements JsonSerializer<BedrockComponent> {
    constructor()
    serialize(arg0: BedrockComponent, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}