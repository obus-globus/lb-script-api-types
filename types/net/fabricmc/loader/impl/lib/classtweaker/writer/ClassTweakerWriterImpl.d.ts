import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassTweakerWriter } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweakerWriter.d.ts'
import type { AccessWidenerVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor.d.ts'
import type { AccessWidenerVisitor$AccessType } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/visitor/AccessWidenerVisitor$AccessType.d.ts'
export class ClassTweakerWriterImpl extends Object implements ClassTweakerWriter {
    static create(paramarg0: number): ClassTweakerWriter;
    constructor(arg0: number)
    // private builder: StringBuilder;
    // private namespace: string;
    // private version: number;
    getOutput(): number[];
    getOutputAsString(): string;
    visitAccessWidener(arg0: string): AccessWidenerVisitor;
    visitEnumExtension(arg0: string, arg1: string, arg2: boolean): void;
    visitHeader(arg0: string): void;
    visitInjectedInterface(arg0: string, arg1: string, arg2: boolean): void;
    // private writeAccess(arg0: AccessWidenerVisitor$AccessType, arg1: boolean): void;
}