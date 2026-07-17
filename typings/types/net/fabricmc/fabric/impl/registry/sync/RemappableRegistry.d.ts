import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RemappableRegistry$RemapMode } from '../../../../../../net/fabricmc/fabric/impl/registry/sync/RemappableRegistry$RemapMode.d.ts'
export interface RemappableRegistry extends Object{
    remap(arg0: JavaMap<any, any>, arg1: RemappableRegistry$RemapMode): void;
    unmap(): void;
}