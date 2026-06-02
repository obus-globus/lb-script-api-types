import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RuntimeSerializationSupport<C extends Object | number | string | boolean> extends Object{
    register(condition: C, clazz: Class<Object>): void;
    register(condition: C, clazz: string): void;
    registerIncludingAssociatedClasses(condition: C, clazz: Class<Object>): void;
    registerLambdaCapturingClass(condition: C, lambdaCapturingClass: Class<Object>): void;
    registerLambdaCapturingClass(condition: C, lambdaCapturingClassName: string): void;
    registerProxyClass(condition: C, implementedInterfaces: Class<Object>[]): void;
    registerProxyClass(condition: C, implementedInterfaces: string[]): void;
}