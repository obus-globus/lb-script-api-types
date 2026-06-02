import type { ObjectInputStream } from '../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SerializationUtil extends Object {
    static REQUIRED_JAVA_CLASSES: string[];
    static REQUIRED_JAVA_PACKAGES: string[];
    static assertFiltered(paramstream: ObjectInputStream): void;
    static readWrappedObject(paramin: ObjectInputStream): Object;
    static stripArray(paramclazz: Class<Object>): string;
    static stripArray(paramname: string): string;
    static writeWrappedObject(paramobj: Serializable, paramout: ObjectOutputStream): void;
    private constructor()
}