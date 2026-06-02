import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DataDeserializer<T extends Object | number | string | boolean> extends Object{
    deserialize<S extends Object | number | string | boolean>(arg0: DataConverter<S>, arg1: S): Result<T>;
}