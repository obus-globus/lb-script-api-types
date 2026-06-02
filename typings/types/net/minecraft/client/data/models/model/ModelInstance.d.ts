import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ModelInstance extends Supplier<JsonElement>, Object{
}