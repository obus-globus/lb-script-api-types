import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ServiceLoader$RankedService extends Object implements Comparable<ServiceLoader$RankedService> {
    constructor(arg0: Object, arg1: number)
    // private rank: number;
    // private service: Object;
    compareTo(arg0: ServiceLoader$RankedService): number;
    isInstanceOf(arg0: Class<Object>): boolean;
}