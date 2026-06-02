import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { MBeanServer } from '../../javax/management/MBeanServer.d.ts'
import type { ObjectName$Property } from '../../javax/management/ObjectName$Property.d.ts'
import type { QueryExp } from '../../javax/management/QueryExp.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ObjectName extends Object implements QueryExp, Comparable<ObjectName> {
    static WILDCARD: ObjectName;
    static getInstance(paramarg0: string): ObjectName;
    static getInstance(paramarg0: string, paramarg1: string, paramarg2: string): ObjectName;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: string }): ObjectName;
    static getInstance(paramarg0: ObjectName): ObjectName;
    static quote(paramarg0: string): string;
    static unquote(paramarg0: string): string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: { [key: string]: string })
    constructor(arg0: string, arg1: string, arg2: string)
    // private _ca_array: ObjectName$Property[];
    // private _canonicalName: string;
    // private _compressed_storage: number;
    // private _kp_array: ObjectName$Property[];
    // private _propertyList: { [key: string]: string };
    // private _getKeyPropertyList(): { [key: string]: string };
    // private addProperty(arg0: ObjectName$Property, arg1: number, arg2: { [key: string]: ObjectName$Property }, arg3: string): void;
    apply(arg0: ObjectName): boolean;
    compareTo(arg0: ObjectName): number;
    // private construct(arg0: string): void;
    // private construct(arg0: string, arg1: { [key: string]: string }): void;
    equals(arg0: Object | null): boolean;
    getCanonicalKeyPropertyListString(): string;
    getCanonicalName(): string;
    getDomain(): string;
    // private getDomainLength(): number;
    getKeyProperty(arg0: string): string;
    getKeyPropertyList(): { [key: string]: string };
    getKeyPropertyListString(): string;
    // private getSerializedNameString(): string;
    hashCode(): number;
    // private isDomain(arg0: string): boolean;
    isDomainPattern(): boolean;
    isPattern(): boolean;
    isPropertyListPattern(): boolean;
    isPropertyPattern(): boolean;
    isPropertyValuePattern(): boolean;
    isPropertyValuePattern(arg0: string): boolean;
    // private matchDomains(arg0: ObjectName): boolean;
    // private matchKeys(arg0: ObjectName): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private setCanonicalName(arg0: string[], arg1: string[], arg2: string[], arg3: { [key: string]: ObjectName$Property }, arg4: number, arg5: number): void;
    // private setDomainLength(arg0: number): void;
    // private setDomainPattern(arg0: boolean): void;
    setMBeanServer(arg0: MBeanServer): void;
    // private setPropertyListPattern(arg0: boolean): void;
    // private setPropertyValuePattern(arg0: boolean): void;
    toString(): string;
    // private writeKeyPropertyListString(arg0: string[], arg1: string[], arg2: number): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}