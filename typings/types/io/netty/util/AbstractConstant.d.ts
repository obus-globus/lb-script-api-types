import type { Constant } from '../../../io/netty/util/Constant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractConstant<T extends AbstractConstant<T>> extends Object implements Constant<T> {
    constructor(arg0: number, arg1: string)
    // private id: number;
    // private name: string;
    // private uniquifier: number;
    compareTo(arg0: T): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    name(): string;
    toString(): string;
}