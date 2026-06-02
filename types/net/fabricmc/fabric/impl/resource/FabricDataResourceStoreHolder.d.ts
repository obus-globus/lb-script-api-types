import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataResourceStore$Mutable } from '../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Mutable.d.ts'
export interface FabricDataResourceStoreHolder extends Object{
    fabric$getDataResourceStore(): DataResourceStore$Mutable;
}