import type { BufferedReader } from '../../../../../../../java/io/BufferedReader.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassTweakerReader } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweakerReader.d.ts'
import type { AccessWidenerVisitor$AccessType } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor$AccessType.d.ts'
import type { ClassTweakerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/ClassTweakerVisitor.d.ts'
import type { ClassTweakerFormatException } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/reader/ClassTweakerFormatException.d.ts'
import type { ClassTweakerReaderImpl$HeaderImpl } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/reader/ClassTweakerReaderImpl$HeaderImpl.d.ts'
export class ClassTweakerReaderImpl extends Object implements ClassTweakerReader {
    static ENCODING: Charset;
    static create(paramarg0: ClassTweakerVisitor): ClassTweakerReader;
    static readHeader(paramarg0: BufferedReader): ClassTweakerReaderImpl$HeaderImpl;
    constructor(arg0: ClassTweakerVisitor)
    // private lineNumber: number;
    // private visitor: ClassTweakerVisitor;
    // private error(arg0: string, ...arg1: Object[]): ClassTweakerFormatException;
    // private handleClass(arg0: string, arg1: string[], arg2: boolean, arg3: AccessWidenerVisitor$AccessType): void;
    // private handleComment(arg0: number, arg1: string): string;
    // private handleField(arg0: string, arg1: string[], arg2: boolean, arg3: AccessWidenerVisitor$AccessType): void;
    // private handleMethod(arg0: string, arg1: string[], arg2: boolean, arg3: AccessWidenerVisitor$AccessType): void;
    read(arg0: BufferedReader, arg1: string): void;
    read(arg0: number[], arg1: string): void;
    // private readAccessType(arg0: string): AccessWidenerVisitor$AccessType;
    // private validateClassName(arg0: string): void;
}