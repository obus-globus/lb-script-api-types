import type { Modifier } from '../../javax/lang/model/element/Modifier.d.ts'
import type { NestingKind } from '../../javax/lang/model/element/NestingKind.d.ts'
import type { FileObject } from '../../javax/tools/FileObject.d.ts'
import type { JavaFileObject$Kind } from '../../javax/tools/JavaFileObject$Kind.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JavaFileObject extends FileObject, Object{
    getAccessLevel(): Modifier;
    getKind(): JavaFileObject$Kind;
    getNestingKind(): NestingKind;
    isNameCompatible(arg0: string, arg1: JavaFileObject$Kind): boolean;
}