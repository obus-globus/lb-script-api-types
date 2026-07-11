import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KotlinGenericDeclaration } from '../../../../kotlin/jvm/internal/KotlinGenericDeclaration.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export interface ReflectKFunction extends Object, KotlinGenericDeclaration, KFunction<Object>, ReflectKCallable<Object>{
    /*not mapped: */ isPrimaryConstructor(): boolean;
    readonly overridden: ReflectKFunction[];
    readonly signature: string;
    call(...args: (Object | null)[]): Object | null;
    callBy(args: Map<KParameter, Object | null>): Object | null;
    findJavaDeclaration(): GenericDeclaration | null;
}