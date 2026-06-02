import type { Object } from '../../java/lang/Object.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export interface SerialFormat extends Object{
    readonly serializersModule: SerializersModule;
}