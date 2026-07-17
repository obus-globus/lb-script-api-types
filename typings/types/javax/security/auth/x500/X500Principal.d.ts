import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Principal } from '../../../../java/security/Principal.d.ts'
import type { Subject } from '../../../../javax/security/auth/Subject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { X500Name } from '../../../../sun/security/x509/X500Name.d.ts'
export class X500Principal extends Object implements Serializable, Principal {
    static CANONICAL: string;
    static RFC1779: string;
    static RFC2253: string;
    constructor(arg0: InputStream)
    constructor(arg0: number[])
    constructor(arg0: string)
    constructor(arg0: string, arg1: JavaMap<string, string>)
    constructor(arg0: X500Name)
    // private thisX500Name: X500Name;
    equals(arg0: Object | null): boolean;
    getEncoded(): number[];
    getName(): string;
    getName(arg0: string): string;
    getName(arg0: string, arg1: JavaMap<string, string>): string;
    hashCode(): number;
    implies(arg0: Subject): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}