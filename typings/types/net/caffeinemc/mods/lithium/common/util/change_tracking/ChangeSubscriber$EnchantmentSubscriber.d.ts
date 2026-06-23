import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChangeSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
export interface ChangeSubscriber$EnchantmentSubscriber<T extends unknown> extends Object, ChangeSubscriber<T>{
    lithium$notifyAfterEnchantmentChange(arg0: T, arg1: number): void;
}