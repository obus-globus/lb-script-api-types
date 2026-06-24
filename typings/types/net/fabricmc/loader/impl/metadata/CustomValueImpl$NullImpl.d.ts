import type { CustomValueImpl$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { CustomValue$CvType } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue$CvType.d.ts'
import type { JsonReader } from '../../../../../net/fabricmc/loader/impl/lib/gson/JsonReader.d.ts'
import type { CustomValueImpl } from '../../../../../net/fabricmc/loader/impl/metadata/CustomValueImpl.d.ts'
export class CustomValueImpl$NullImpl extends CustomValueImpl {
    static readCustomValue(paramarg0: JsonReader): CustomValue;
    private constructor()
    constructor(arg0: CustomValueImpl$1)
    getType(): CustomValue$CvType;
}