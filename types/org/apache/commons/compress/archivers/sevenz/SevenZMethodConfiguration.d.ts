import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SevenZMethod } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZMethod.d.ts'
export class SevenZMethodConfiguration extends Object {
    constructor(arg0: SevenZMethod)
    constructor(arg0: SevenZMethod, arg1: Object)
    readonly method: SevenZMethod;
    readonly options: Object;
    equals(arg0: Object | null): boolean;
    getMethod(): SevenZMethod;
    getOptions(): Object;
    hashCode(): number;
}