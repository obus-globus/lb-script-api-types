import type { Object } from '../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KParameter$Kind } from '../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
export interface KParameter extends Object, KAnnotatedElement{
    readonly index: number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly kind: KParameter$Kind;
    readonly name: string | null;
    readonly type: KType;
}