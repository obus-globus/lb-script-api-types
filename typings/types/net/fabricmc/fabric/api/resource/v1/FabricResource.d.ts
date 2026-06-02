import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackSource } from '../../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export interface FabricResource extends Object{
    getFabricPackSource(): PackSource;
}