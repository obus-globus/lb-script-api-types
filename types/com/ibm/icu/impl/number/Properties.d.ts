import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Properties extends Object implements Serializable {
    constructor()
    readonly instance: DecimalFormatProperties;
    getInstance(): DecimalFormatProperties;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}