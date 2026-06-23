import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CyclicBuffer<T extends unknown> extends Object {
    constructor(clazz: Class<T>, size: number)
    // private clazz: Class<T>;
    // private first: number;
    // private last: number;
    // private numElems: number;
    // private ring: T[];
    add(item: T): void;
    isEmpty(): boolean;
    // private makeArray(cls: Class<T>, size: number): T[];
    removeAll(): T[];
}