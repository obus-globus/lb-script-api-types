import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KotlinGenericDeclaration } from '../../../kotlin/jvm/internal/KotlinGenericDeclaration.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
import type { KParameter } from '../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../kotlin/reflect/KVisibility.d.ts'
export abstract class CallableReference extends Object implements Serializable, KotlinGenericDeclaration, KCallable<Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: boolean)
    readonly annotations: Annotation[];
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    // private isTopLevel: boolean;
    readonly name: string;
    readonly name: string;
    readonly owner: Class<Object>;
    readonly parameters: KParameter[];
    // private receiver: Object;
    // private reflected: KCallable<Object>;
    readonly returnType: KType;
    readonly signature: string;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    call(...arg0: (Object | null)[]): Object | null;
    callBy(arg0: Map<Object | null, Object | null>): Object | null;
    compute(): KCallable<Object>;
    computeReflected(): KCallable<Object>;
    findJavaDeclaration(): GenericDeclaration | null;
    getBoundReceiver(): Object;
    getOwner(): KDeclarationContainer;
    getReflected(): KCallable<Object>;
    getSignature(): string;
}