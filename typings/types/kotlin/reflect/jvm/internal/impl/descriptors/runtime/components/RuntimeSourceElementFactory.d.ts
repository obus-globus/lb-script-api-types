import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaSourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElement.d.ts'
import type { JavaSourceElementFactory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElementFactory.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
export class RuntimeSourceElementFactory extends Object implements JavaSourceElementFactory {
    static INSTANCE: RuntimeSourceElementFactory;
    private constructor()
    source(arg0: JavaElement): JavaSourceElement;
}