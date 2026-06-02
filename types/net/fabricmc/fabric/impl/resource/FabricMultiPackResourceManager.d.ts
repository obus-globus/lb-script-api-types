import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
export interface FabricMultiPackResourceManager extends Object{
    fabric$getPackType(): PackType;
}