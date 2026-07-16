import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CollectionsKt__CollectionsJVMKt extends Object {
    static build<E extends unknown>(builder: E[]): E[];
    static copyToArrayOfAny<T extends unknown>(self: T[], isVarargs: boolean): (Object | null)[];
    static createListBuilder<E extends unknown>(): E[];
    static createListBuilder<E extends unknown>(capacity: number): E[];
    static listOf<T extends unknown>(element: T): T[];
    static shuffled<T extends unknown>(self: T[]): T[];
    static shuffled<T extends unknown>(self: T[], random: Random): T[];
    static terminateCollectionToArray<T extends unknown>(collectionSize: number, array: T[]): T[];
}