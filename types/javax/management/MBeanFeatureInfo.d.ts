import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { DescriptorRead } from '../../javax/management/DescriptorRead.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MBeanFeatureInfo extends Object implements Serializable, DescriptorRead {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Descriptor)
    description: string;
    readonly descriptor: Descriptor;
    name: string;
    equals(arg0: Object | null): boolean;
    getDescription(): string;
    getDescriptor(): Descriptor;
    getName(): string;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}