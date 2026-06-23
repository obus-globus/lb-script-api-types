import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
export interface SelectItemModel$ModelSelector<T extends unknown> extends Object{
    get(value: T, context: ClientLevel): ItemModel;
}