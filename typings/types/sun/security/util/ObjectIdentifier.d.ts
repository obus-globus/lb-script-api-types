import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { KnownOIDs } from '../../../sun/security/util/KnownOIDs.d.ts'
export class ObjectIdentifier extends Object implements Serializable {
    static of(paramarg0: string): ObjectIdentifier;
    static of(paramarg0: KnownOIDs): ObjectIdentifier;
    constructor(arg0: number[])
    private constructor(arg0: string)
    constructor(arg0: DerInputStream)
    // private componentLen: number;
    // private components: Object;
    // private componentsCalculated: boolean;
    // private encoding: number[];
    // private stringForm: string;
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private init(arg0: number[], arg1: number): void;
    // private readObject(arg0: ObjectInputStream): void;
    // private toIntArray(): number[];
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}