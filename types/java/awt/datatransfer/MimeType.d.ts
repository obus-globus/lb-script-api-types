import type { MimeTypeParameterList } from '../../../java/awt/datatransfer/MimeTypeParameterList.d.ts'
import type { Externalizable } from '../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class MimeType extends Object implements Externalizable, Cloneable {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: MimeTypeParameterList)
    readonly parameters: MimeTypeParameterList;
    readonly primaryType: string;
    readonly subType: string;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getBaseType(): string;
    getParameter(arg0: string): string;
    getParameters(): MimeTypeParameterList;
    getPrimaryType(): string;
    getSubType(): string;
    hashCode(): number;
    // private isValidToken(arg0: string): boolean;
    match(arg0: MimeType): boolean;
    match(arg0: string): boolean;
    // private parse(arg0: string): void;
    readExternal(arg0: ObjectInput): void;
    removeParameter(arg0: string): void;
    setParameter(arg0: string, arg1: string): void;
    toString(): string;
    writeExternal(arg0: ObjectOutput): void;
}