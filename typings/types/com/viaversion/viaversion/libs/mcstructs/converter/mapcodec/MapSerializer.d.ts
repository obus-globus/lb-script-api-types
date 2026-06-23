import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface MapSerializer<T extends unknown> extends Object{
    serialize<S extends unknown>(arg0: DataConverter<S>, arg1: Map<S, S>, arg2: T): Result<Map<S, S>>;
}