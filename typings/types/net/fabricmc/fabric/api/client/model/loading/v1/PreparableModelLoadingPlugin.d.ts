import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelLoadingPlugin$Context } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin$Context.d.ts'
export interface PreparableModelLoadingPlugin<T extends unknown> extends Object{
    initialize(arg0: T, arg1: ModelLoadingPlugin$Context): void;
}