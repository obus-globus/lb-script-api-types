import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { MimeType } from '../../javax/print/MimeType.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class DocFlavor extends Object implements Serializable, Cloneable {
    static hostEncoding: string;
    constructor(arg0: string, arg1: string)
    // private myClassName: string;
    // private myMimeType: MimeType;
    // private myStringValue: string;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getMediaSubtype(): string;
    getMediaType(): string;
    getMimeType(): string;
    getParameter(arg0: string): string;
    getRepresentationClassName(): string;
    // private getStringValue(): string;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}