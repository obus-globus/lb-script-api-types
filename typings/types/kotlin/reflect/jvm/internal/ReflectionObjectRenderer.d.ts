import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { FqNameUnsafe } from '../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { AbstractKType } from '../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
export class ReflectionObjectRenderer extends Object {
    static INSTANCE: ReflectionObjectRenderer;
    // private getTypeClassFqName(type: AbstractKType, klass: KClass<Object>): FqNameUnsafe | null;
    // private renderCallable(callable: KCallable<Object>): string;
    // private renderFlexibleType(lowerRendered: string, upperRendered: string): string;
    renderFunction(function_: KFunction<Object>): string;
    renderLambda(lambda: KFunction<Object>): string;
    renderParameter(parameter: KParameter): string;
    renderProperty(property: KProperty<Object>): string;
    renderType(type: KType, renderRawArgumentPrefix: boolean): string;
}