import type { MimeType } from '../../../java/awt/datatransfer/MimeType.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { Externalizable } from '../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../java/io/ObjectOutput.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class DataFlavor extends Object implements Externalizable, Cloneable {
    static allHtmlFlavor: DataFlavor;
    static fragmentHtmlFlavor: DataFlavor;
    static imageFlavor: DataFlavor;
    static javaFileListFlavor: DataFlavor;
    static javaJVMLocalObjectMimeType: string;
    static javaRemoteObjectMimeType: string;
    static javaSerializedObjectMimeType: string;
    static plainTextFlavor: DataFlavor;
    static selectionHtmlFlavor: DataFlavor;
    static stringFlavor: DataFlavor;
    static getTextPlainUnicodeFlavor(): DataFlavor;
    static selectBestTextFlavor(paramarg0: (Object | null)[]): DataFlavor;
    constructor()
    constructor(arg0: Class<Object>, arg1: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: ClassLoader)
    // private atom: number;
    readonly humanPresentableName: string;
    mimeType: MimeType;
    readonly representationClass: Class<Object>;
    clone(): Object;
    equals(arg0: DataFlavor): boolean;
    equals(arg0: Object | null): boolean;
    equals(arg0: string): boolean;
    getDefaultRepresentationClass(): Class<Object>;
    getDefaultRepresentationClassAsString(): string;
    getHumanPresentableName(): string;
    getMimeType(): string;
    getParameter(arg0: string): string;
    getPrimaryType(): string;
    getReaderForText(arg0: Transferable): Reader;
    getRepresentationClass(): Class<Object>;
    getSubType(): string;
    hashCode(): number;
    // private initialize(arg0: string, arg1: string, arg2: ClassLoader): void;
    isFlavorJavaFileListType(): boolean;
    isFlavorRemoteObjectType(): boolean;
    isFlavorSerializedObjectType(): boolean;
    isFlavorTextType(): boolean;
    isMimeTypeEqual(arg0: DataFlavor): boolean;
    // private isMimeTypeEqual(arg0: MimeType): boolean;
    isMimeTypeEqual(arg0: string): boolean;
    isMimeTypeSerializedObject(): boolean;
    isRepresentationClassByteBuffer(): boolean;
    isRepresentationClassCharBuffer(): boolean;
    isRepresentationClassInputStream(): boolean;
    isRepresentationClassReader(): boolean;
    isRepresentationClassRemote(): boolean;
    isRepresentationClassSerializable(): boolean;
    // private isStandardTextRepresentationClass(): boolean;
    match(arg0: DataFlavor): boolean;
    normalizeMimeType(arg0: string): string;
    normalizeMimeTypeParameter(arg0: string, arg1: string): string;
    // private paramString(): string;
    readExternal(arg0: ObjectInput): void;
    setHumanPresentableName(arg0: string): void;
    toString(): string;
    writeExternal(arg0: ObjectOutput): void;
}