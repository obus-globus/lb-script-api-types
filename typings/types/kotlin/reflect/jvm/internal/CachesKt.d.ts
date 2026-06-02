import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KDeclarationContainer } from '../../../../kotlin/reflect/KDeclarationContainer.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
export class CachesKt extends Object {
    static clearCaches(): void;
    static getOrCreateKType(paramarg0: Class<Object>, paramarg1: KTypeProjection[], paramarg2: boolean): KType;
    static getOrCreateKotlinClass(paramarg0: Class<Object>): KClassImpl<Object>;
    static getOrCreateKotlinPackage(paramarg0: Class<Object>): KDeclarationContainer;
}