import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Payload<T extends Object | number | string | boolean> extends Object implements Comparable<Payload<T>> {
    constructor(arg0: string, arg1: T)
    readonly data: T;
    readonly keyword: string;
    compareTo(arg0: Payload<T>): number;
    getData(): T;
    getKeyword(): string;
}