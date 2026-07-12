import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { FileObject } from '../../../javax/tools/FileObject.d.ts'
import type { JavaFileManager$Location } from '../../../javax/tools/JavaFileManager$Location.d.ts'
import type { JavaFileObject } from '../../../javax/tools/JavaFileObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface Filer extends Object{
    createClassFile(arg0: CharSequence, ...arg1: Element[]): JavaFileObject;
    createResource(arg0: JavaFileManager$Location, arg1: CharSequence, arg2: CharSequence, ...arg3: Element[]): FileObject;
    createSourceFile(arg0: CharSequence, ...arg1: Element[]): JavaFileObject;
    getResource(arg0: JavaFileManager$Location, arg1: CharSequence, arg2: CharSequence): FileObject;
}