import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractArrayMapOwner$AbstractArrayMapAccessor<K extends Object | number | string | boolean, V extends Object | number | string | boolean, T extends V> extends Object {
    constructor(arg0: number)
    // private id: number;
    extractValue(arg0: V[]): T;
}