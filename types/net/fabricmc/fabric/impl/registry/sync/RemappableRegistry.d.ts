import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RemappableRegistry$RemapMode } from '../../../../../../net/fabricmc/fabric/impl/registry/sync/RemappableRegistry$RemapMode.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface RemappableRegistry extends Object{
    remap(arg0: Object2IntMap<Identifier>, arg1: RemappableRegistry$RemapMode): void;
    unmap(): void;
}