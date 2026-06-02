import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { MBeanFeatureInfo } from '../../javax/management/MBeanFeatureInfo.d.ts'
import type { MBeanParameterInfo } from '../../javax/management/MBeanParameterInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanConstructorInfo extends MBeanFeatureInfo implements Cloneable {
    constructor(arg0: string, arg1: Constructor<Object>)
    constructor(arg0: string, arg1: string, arg2: MBeanParameterInfo[])
    constructor(arg0: string, arg1: string, arg2: MBeanParameterInfo[], arg3: Descriptor)
    // private arrayGettersSafe: boolean;
    readonly signature: MBeanParameterInfo[];
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    // private fastGetSignature(): MBeanParameterInfo[];
    getSignature(): MBeanParameterInfo[];
    hashCode(): number;
    toString(): string;
}