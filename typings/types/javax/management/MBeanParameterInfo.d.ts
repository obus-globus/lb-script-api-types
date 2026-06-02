import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { MBeanFeatureInfo } from '../../javax/management/MBeanFeatureInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanParameterInfo extends MBeanFeatureInfo implements Cloneable {
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: Descriptor)
    readonly type: string;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getType(): string;
    hashCode(): number;
    toString(): string;
}