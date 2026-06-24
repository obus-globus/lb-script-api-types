import type { DocTrees } from '../../../com/sun/source/util/DocTrees.d.ts'
import type { SourceVersion } from '../../../javax/lang/model/SourceVersion.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { TypeElement } from '../../../javax/lang/model/element/TypeElement.d.ts'
import type { Elements } from '../../../javax/lang/model/util/Elements.d.ts'
import type { Types } from '../../../javax/lang/model/util/Types.d.ts'
import type { JavaFileManager } from '../../../javax/tools/JavaFileManager.d.ts'
import type { JavaFileObject$Kind } from '../../../javax/tools/JavaFileObject$Kind.d.ts'
import type { DocletEnvironment$ModuleMode } from '../../../jdk/javadoc/doclet/DocletEnvironment$ModuleMode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DocletEnvironment extends Object{
    getDocTrees(): DocTrees;
    getElementUtils(): Elements;
    getFileKind(arg0: TypeElement): JavaFileObject$Kind;
    getIncludedElements(): Element[];
    getJavaFileManager(): JavaFileManager;
    getModuleMode(): DocletEnvironment$ModuleMode;
    getSourceVersion(): SourceVersion;
    getSpecifiedElements(): Element[];
    getTypeUtils(): Types;
    isIncluded(arg0: Element): boolean;
    isSelected(arg0: Element): boolean;
}