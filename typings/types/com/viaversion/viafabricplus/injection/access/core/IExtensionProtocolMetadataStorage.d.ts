import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassicProtocolExtension } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/data/ClassicProtocolExtension.d.ts'
export interface IExtensionProtocolMetadataStorage extends Object{
    viaFabricPlus$getServerExtensions(): Map<ClassicProtocolExtension, number>;
}