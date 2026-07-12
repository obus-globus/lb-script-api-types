import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export interface SerializerFactory extends Object{
    serializer(...typeParamsSerializers: KSerializer<Object>[]): KSerializer<Object>;
}