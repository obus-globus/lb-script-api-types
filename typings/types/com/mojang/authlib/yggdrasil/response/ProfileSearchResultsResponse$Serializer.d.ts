import type { JsonDeserializationContext } from '../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { ProfileSearchResultsResponse } from '../../../../../com/mojang/authlib/yggdrasil/response/ProfileSearchResultsResponse.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfileSearchResultsResponse$Serializer extends Object implements JsonDeserializer<ProfileSearchResultsResponse> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): ProfileSearchResultsResponse;
}