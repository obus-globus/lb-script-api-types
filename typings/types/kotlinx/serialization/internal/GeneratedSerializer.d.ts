import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export interface GeneratedSerializer<T extends Object | number | string | boolean> extends Object, KSerializer<T>{
    childSerializers(): KSerializer<Object>[];
    typeParametersSerializers(): KSerializer<Object>[];
}