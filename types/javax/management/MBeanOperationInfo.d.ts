import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { MBeanFeatureInfo } from '../../javax/management/MBeanFeatureInfo.d.ts'
import type { MBeanParameterInfo } from '../../javax/management/MBeanParameterInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanOperationInfo extends MBeanFeatureInfo implements Cloneable {
    static ACTION: number;
    static ACTION_INFO: number;
    static INFO: number;
    static UNKNOWN: number;
    constructor(arg0: string, arg1: Method)
    constructor(arg0: string, arg1: string, arg2: MBeanParameterInfo[], arg3: string, arg4: number)
    constructor(arg0: string, arg1: string, arg2: MBeanParameterInfo[], arg3: string, arg4: number, arg5: Descriptor)
    // private arrayGettersSafe: boolean;
    readonly impact: number;
    readonly signature: MBeanParameterInfo[];
    // private type: string;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    // private fastGetSignature(): MBeanParameterInfo[];
    getImpact(): number;
    getReturnType(): string;
    getSignature(): MBeanParameterInfo[];
    hashCode(): number;
    toString(): string;
}