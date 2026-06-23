import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ExtraModelKey } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ExtraModelKey.d.ts'
export interface FabricModelManager extends Object{
    getModel<T extends unknown>(arg0: ExtraModelKey<T>): T;
}