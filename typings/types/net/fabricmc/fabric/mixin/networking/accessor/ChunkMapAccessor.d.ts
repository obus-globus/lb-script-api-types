import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChunkMapAccessor extends Object{
    getEntityMap(): JavaMap<any, any>;
}