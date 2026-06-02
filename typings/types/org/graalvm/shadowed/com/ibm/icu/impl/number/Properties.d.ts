import type { ObjectInputStream } from '../../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
export class Properties extends Object implements Serializable {
    constructor()
    readonly instance: DecimalFormatProperties;
    getInstance(): DecimalFormatProperties;
    // private readObject(ois: ObjectInputStream): void;
    // private writeObject(oos: ObjectOutputStream): void;
}