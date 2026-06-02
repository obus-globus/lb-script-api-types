import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PacketContext$ReadKey } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$ReadKey.d.ts'
export interface PacketContext$Key<T extends Object | number | string | boolean> extends Object, PacketContext$ReadKey<T>{
}