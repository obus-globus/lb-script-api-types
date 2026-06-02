import type { CompositeType } from '../../../javax/management/openmbean/CompositeType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CompositeData extends Object{
    containsKey(arg0: string): boolean;
    containsValue(arg0: Object): boolean;
    get(arg0: string): Object;
    getAll(arg0: string[]): Object[];
    getCompositeType(): CompositeType;
    values(): E[];
}