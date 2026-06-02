import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeSerialization extends Object {
    static register(paramclasses: Object | null): void;
    static registerIncludingAssociatedClasses(paramclazz: Class<Object>): void;
    static registerLambdaCapturingClass(paramlambdaCapturingClass: Class<Object>): void;
    static registerProxyClass(paramimplementedInterfaces: Object | null): void;
    static registerWithTargetConstructorClass(paramclazz: Class<Object>, paramcustomTargetConstructorClazz: Class<Object>): void;
    private constructor()
}