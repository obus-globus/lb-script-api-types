import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChangeSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
export interface ChangeSubscriber$CountChangeSubscriber<T extends unknown> extends Object, ChangeSubscriber<T>{
    lithium$notifyCount(arg0: T, arg1: number, arg2: number): void;
}