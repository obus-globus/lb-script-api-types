import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Node } from '../../../../org/w3c/dom/Node.d.ts'
export class Param<T extends unknown> extends Object implements Serializable {
    static load(paramarg0: InputStream): Param<Object>;
    static load(paramarg0: Node): Param<Object>;
    constructor()
    constructor(arg0: string, arg1: T)
    constructor(arg0: string, arg1: Class<T>, arg2: T)
    // private actualValue: T;
    readonly name: string;
    readonly type: Class<T>;
    // private valueStrings: string[];
    getName(): string;
    getType(): Class<T>;
    getTypeString(): string;
    getValue(): T;
    save(arg0: OutputStream): void;
    save(arg0: Document, arg1: Node): void;
    setName(arg0: string): void;
    setType(arg0: Class<T>): void;
    setTypeString(arg0: string): void;
    toString(): string;
}