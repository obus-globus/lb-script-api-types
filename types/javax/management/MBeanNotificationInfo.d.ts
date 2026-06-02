import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { MBeanFeatureInfo } from '../../javax/management/MBeanFeatureInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanNotificationInfo extends MBeanFeatureInfo implements Cloneable {
    constructor(arg0: string[], arg1: string, arg2: string)
    constructor(arg0: string[], arg1: string, arg2: string, arg3: Descriptor)
    // private arrayGettersSafe: boolean;
    // private types: string[];
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    // private fastGetNotifTypes(): string[];
    getNotifTypes(): string[];
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
}