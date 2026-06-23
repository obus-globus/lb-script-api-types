import type { Object } from '../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KParameter } from '../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../kotlin/reflect/KVisibility.d.ts'
export interface KCallable<R extends unknown> extends Object, KAnnotatedElement{
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    call(args: (Object | null)[]): R;
    callBy(args: Map<KParameter, Object | null>): R;
}