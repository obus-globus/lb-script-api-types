import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MappingDataLoader$MappingsSupplier<T extends Mappings, V extends unknown> extends Object{
    create(arg0: V, arg1: number): T;
}