import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChangeSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ChangePublisher<T extends unknown> extends Object{
    lithium$isSubscribedWithData(arg0: ChangeSubscriber<ItemStack>, arg1: number): boolean;
    lithium$subscribe(arg0: ChangeSubscriber<T>, arg1: number): void;
    lithium$unsubscribe(arg0: ChangeSubscriber<T>): number;
    lithium$unsubscribeWithData(arg0: ChangeSubscriber<T>, arg1: number): void;
}