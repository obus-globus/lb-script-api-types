import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Descriptor } from '../../../javax/management/Descriptor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class OpenType<T extends unknown> extends Object implements Serializable {
    static ALLOWED_CLASSNAMES: (Object | null)[];
    static ALLOWED_CLASSNAMES_LIST: string[];
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: boolean)
    readonly className: string;
    readonly description: string;
    // private descriptor: Descriptor;
    // private isArray: boolean;
    readonly typeName: string;
    // private checkClassNameOverride(): void;
    equals(arg0: Object | null): boolean;
    getClassName(): string;
    getDescription(): string;
    getDescriptor(): Descriptor;
    getTypeName(): string;
    hashCode(): number;
    isArray(): boolean;
    isAssignableFrom(arg0: OpenType<Object>): boolean;
    isValue(arg0: Object): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    safeGetClassName(): string;
    toString(): string;
}