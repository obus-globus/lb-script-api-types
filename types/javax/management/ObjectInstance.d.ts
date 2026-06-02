import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ObjectName } from '../../javax/management/ObjectName.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectInstance extends Object implements Serializable {
    constructor(arg0: ObjectName, arg1: string)
    constructor(arg0: string, arg1: string)
    readonly className: string;
    // private name: ObjectName;
    equals(arg0: Object | null): boolean;
    getClassName(): string;
    getObjectName(): ObjectName;
    hashCode(): number;
    toString(): string;
}