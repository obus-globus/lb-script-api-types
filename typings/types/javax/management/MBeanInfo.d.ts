import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { DescriptorRead } from '../../javax/management/DescriptorRead.d.ts'
import type { MBeanAttributeInfo } from '../../javax/management/MBeanAttributeInfo.d.ts'
import type { MBeanConstructorInfo } from '../../javax/management/MBeanConstructorInfo.d.ts'
import type { MBeanNotificationInfo } from '../../javax/management/MBeanNotificationInfo.d.ts'
import type { MBeanOperationInfo } from '../../javax/management/MBeanOperationInfo.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class MBeanInfo extends Object implements Serializable, DescriptorRead, Cloneable {
    constructor(arg0: string, arg1: string, arg2: MBeanAttributeInfo[], arg3: MBeanConstructorInfo[], arg4: MBeanOperationInfo[], arg5: MBeanNotificationInfo[])
    constructor(arg0: string, arg1: string, arg2: MBeanAttributeInfo[], arg3: MBeanConstructorInfo[], arg4: MBeanOperationInfo[], arg5: MBeanNotificationInfo[], arg6: Descriptor)
    // private arrayGettersSafe: boolean;
    readonly attributes: MBeanAttributeInfo[];
    readonly className: string;
    readonly constructors: MBeanConstructorInfo[];
    readonly description: string;
    readonly descriptor: Descriptor;
    // private hashCode: number;
    readonly notifications: MBeanNotificationInfo[];
    readonly operations: MBeanOperationInfo[];
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    // private fastGetAttributes(): MBeanAttributeInfo[];
    // private fastGetConstructors(): MBeanConstructorInfo[];
    // private fastGetNotifications(): MBeanNotificationInfo[];
    // private fastGetOperations(): MBeanOperationInfo[];
    getAttributes(): MBeanAttributeInfo[];
    getClassName(): string;
    getConstructors(): MBeanConstructorInfo[];
    getDescription(): string;
    getDescriptor(): Descriptor;
    getNotifications(): MBeanNotificationInfo[];
    getOperations(): MBeanOperationInfo[];
    hashCode(): number;
    // private nonNullAttributes(): MBeanAttributeInfo[];
    // private nonNullConstructors(): MBeanConstructorInfo[];
    // private nonNullNotifications(): MBeanNotificationInfo[];
    // private nonNullOperations(): MBeanOperationInfo[];
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}