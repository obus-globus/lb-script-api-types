import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
export interface SelectBlockModel$ModelSelector<T extends Object | number | string | boolean> extends Object{
    get(value: T): BlockModel;
}