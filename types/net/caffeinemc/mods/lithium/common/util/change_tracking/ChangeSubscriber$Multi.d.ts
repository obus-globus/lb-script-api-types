import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChangeSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
import type { ChangeSubscriber$CountChangeSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber$CountChangeSubscriber.d.ts'
import type { ChangeSubscriber$EnchantmentSubscriber } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber$EnchantmentSubscriber.d.ts'
export class ChangeSubscriber$Multi<T extends Object | number | string | boolean> extends Object implements ChangeSubscriber$CountChangeSubscriber<T>, ChangeSubscriber$EnchantmentSubscriber<T> {
    constructor(arg0: ChangeSubscriber<T>[], arg1: (Object | null)[])
    // private subscriberDatas: (Object | null)[];
    // private subscribers: ChangeSubscriber<T>[];
    indexOf(arg0: ChangeSubscriber<T>, arg1: number, arg2: boolean): number;
    lithium$forceUnsubscribe(arg0: T, arg1: number): void;
    lithium$notify(arg0: T, arg1: number): void;
    lithium$notifyAfterEnchantmentChange(arg0: T, arg1: number): void;
    lithium$notifyCount(arg0: T, arg1: number, arg2: number): void;
}