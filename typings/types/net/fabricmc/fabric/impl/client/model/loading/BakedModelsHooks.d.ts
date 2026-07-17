import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ExtraModelKey } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ExtraModelKey.d.ts'
export interface BakedModelsHooks extends Object{
    fabric_getExtraModels(): JavaMap<ExtraModelKey<Object>, Object | null>;
    fabric_setExtraModels(arg0: JavaMap<ExtraModelKey<Object>, Object | null>): void;
}