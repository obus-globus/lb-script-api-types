import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Ref$ObjectRef<T extends Object | number | string | boolean> extends Object implements Serializable {
    constructor()
    element: T;
    toString(): string;
}