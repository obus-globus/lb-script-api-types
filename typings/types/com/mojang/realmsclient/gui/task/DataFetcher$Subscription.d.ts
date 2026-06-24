import type { DataFetcher } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher.d.ts'
import type { DataFetcher$SubscribedTask } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$SubscribedTask.d.ts'
import type { DataFetcher$Task } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$Task.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataFetcher$Subscription extends Object {
    constructor(null_: DataFetcher)
    // private subscriptions: DataFetcher$SubscribedTask<Object>[];
    forceUpdate(): void;
    reset(): void;
    subscribe<T extends unknown>(task: DataFetcher$Task<T>, output: (param0: T) => void): void;
    tick(): void;
}