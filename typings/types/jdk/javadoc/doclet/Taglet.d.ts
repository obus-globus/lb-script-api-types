import type { DocTree } from '../../../com/sun/source/doctree/DocTree.d.ts'
import type { Element } from '../../../javax/lang/model/element/Element.d.ts'
import type { Doclet } from '../../../jdk/javadoc/doclet/Doclet.d.ts'
import type { DocletEnvironment } from '../../../jdk/javadoc/doclet/DocletEnvironment.d.ts'
import type { Taglet$Location } from '../../../jdk/javadoc/doclet/Taglet$Location.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Taglet extends Object{
    getAllowedLocations(): Taglet$Location[];
    getName(): string;
    init(arg0: DocletEnvironment, arg1: Doclet): void;
    isBlockTag(): boolean;
    isInlineTag(): boolean;
    toString(arg0: DocTree[], arg1: Element): string;
    toString(): string;
}