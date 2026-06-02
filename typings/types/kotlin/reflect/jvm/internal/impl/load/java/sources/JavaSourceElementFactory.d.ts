import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaSourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElement.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
export interface JavaSourceElementFactory extends Object{
    source(arg0: JavaElement): JavaSourceElement;
}