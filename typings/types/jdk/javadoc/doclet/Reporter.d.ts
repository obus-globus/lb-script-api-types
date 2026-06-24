import type { DocTree } from '../../../com/sun/source/doctree/DocTree.d.ts'
import type { PrintWriter } from '../../../java/io/PrintWriter.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { Diagnostic$Kind } from '../../../javax/tools/Diagnostic$Kind.d.ts'
import type { FileObject } from '../../../javax/tools/FileObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Reporter extends Object{
    getDiagnosticWriter(): PrintWriter;
    getStandardWriter(): PrintWriter;
    print(arg0: Diagnostic$Kind, arg1: DocTree[], arg2: number, arg3: number, arg4: number, arg5: string): void;
    print(arg0: Diagnostic$Kind, arg1: DocTree[], arg2: string): void;
    print(arg0: Diagnostic$Kind, arg1: Element, arg2: string): void;
    print(arg0: Diagnostic$Kind, arg1: FileObject, arg2: number, arg3: number, arg4: number, arg5: string): void;
    print(arg0: Diagnostic$Kind, arg1: string): void;
}