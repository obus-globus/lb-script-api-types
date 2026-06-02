import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { MBeanFeatureInfo } from '../../javax/management/MBeanFeatureInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanAttributeInfo extends MBeanFeatureInfo implements Cloneable {
    constructor(arg0: string, arg1: string, arg2: Method, arg3: Method)
    constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean)
    constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Descriptor)
    // private attributeType: string;
    readonly is: boolean;
    // private isRead: boolean;
    // private isWrite: boolean;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getType(): string;
    hashCode(): number;
    isIs(): boolean;
    isReadable(): boolean;
    isWritable(): boolean;
    toString(): string;
}