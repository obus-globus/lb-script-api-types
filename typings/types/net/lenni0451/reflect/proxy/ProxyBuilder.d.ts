import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassBuilder } from '../../../../net/lenni0451/reflect/bytecode/builder/ClassBuilder.d.ts'
import type { BuiltClass } from '../../../../net/lenni0451/reflect/bytecode/wrapper/BuiltClass.d.ts'
import type { InvocationHandler } from '../../../../net/lenni0451/reflect/proxy/InvocationHandler.d.ts'
import type { ProxyBuilder$Reference } from '../../../../net/lenni0451/reflect/proxy/ProxyBuilder$Reference.d.ts'
import type { ProxyClass } from '../../../../net/lenni0451/reflect/proxy/ProxyClass.d.ts'
import type { ProxyClassDefiner } from '../../../../net/lenni0451/reflect/proxy/ProxyClassDefiner.d.ts'
import type { ProxyMethod } from '../../../../net/lenni0451/reflect/proxy/impl/ProxyMethod.d.ts'
export class ProxyBuilder extends Object {
    constructor()
    readonly classDefiner: ProxyClassDefiner;
    readonly interfaces: Class<Object>[];
    readonly invocationHandler: InvocationHandler;
    readonly methodFilter: (param0: Method) => boolean;
    readonly methodMapper: (param0: Method) => Method;
    // private proxyClass: Class<Object>;
    readonly superClass: Class<Object>;
    // private addConstructors(arg0: ClassBuilder): void;
    // private addDefaultMethods(arg0: ClassBuilder): void;
    // private addFields(arg0: ClassBuilder, arg1: Method[]): void;
    addInterface(arg0: Class<Object>): ProxyBuilder;
    // private addMethods(arg0: ClassBuilder, arg1: Method[]): void;
    build(): ProxyClass;
    // private buildClass(arg0: ProxyBuilder$Reference<Method[]>, arg1: ProxyBuilder$Reference<Method[]>): BuiltClass;
    // private buildProxyMethodClasses(arg0: Method[], arg1: Method[]): Class<ProxyMethod>[];
    getClassDefiner(): ProxyClassDefiner;
    getInterfaces(): Class<Object>[];
    getInvocationHandler(): InvocationHandler;
    getMethodFilter(): (param0: Method) => boolean;
    getMethodMapper(): (param0: Method) => Method;
    getSuperClass(): Class<Object>;
    // private reset(): void;
    setClassDefiner(arg0: ProxyClassDefiner): ProxyBuilder;
    setInterfaces(arg0: Class<Object>[]): ProxyBuilder;
    setInvocationHandler(arg0: InvocationHandler): ProxyBuilder;
    setMethodFilter(arg0: (param0: Method) => boolean): ProxyBuilder;
    setMethodMapper(arg0: (param0: Method) => Method): ProxyBuilder;
    setSuperClass(arg0: Class<Object>): ProxyBuilder;
}