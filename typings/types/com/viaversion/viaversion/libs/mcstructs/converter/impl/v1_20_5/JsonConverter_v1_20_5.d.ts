import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { JsonConverter_v1_20_3 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/v1_20_3/JsonConverter_v1_20_3.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
export class JsonConverter_v1_20_5 extends JsonConverter_v1_20_3 {
    static INSTANCE: JsonConverter_v1_20_5;
    constructor()
    asBoolean(arg0: JsonElement): Result<boolean>;
    asNumber(arg0: JsonElement): Result<Number>;
    forkIfDefault(): DataConverter<JsonElement>;
}