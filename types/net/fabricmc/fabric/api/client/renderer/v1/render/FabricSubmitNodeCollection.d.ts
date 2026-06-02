import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricSubmitNodeCollection$ExtendedBlockModelSubmit } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/FabricSubmitNodeCollection$ExtendedBlockModelSubmit.d.ts'
import type { FabricSubmitNodeCollection$ExtendedItemSubmit } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/FabricSubmitNodeCollection$ExtendedItemSubmit.d.ts'
export interface FabricSubmitNodeCollection extends Object{
    getExtendedBlockModelSubmits(): FabricSubmitNodeCollection$ExtendedBlockModelSubmit[];
    getExtendedItemSubmits(): FabricSubmitNodeCollection$ExtendedItemSubmit[];
}