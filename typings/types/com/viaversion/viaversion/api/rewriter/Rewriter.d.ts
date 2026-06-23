import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { MappingDataListener } from '../../../../../com/viaversion/viaversion/api/rewriter/MappingDataListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Rewriter<T extends Protocol<any, any, any, any>> extends MappingDataListener, Object{
    onMappingDataLoaded(): void;
    protocol(): T;
    register(): void;
}