import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InvocationHandler } from '../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Reflection extends Object {
    static getPackageName(paramclazz: Class<Object>): string;
    static getPackageName(paramclassFullName: string): string;
    static initialize(...paramclasses: Object | null): void;
    static newProxy(paraminterfaceType: Class<Object>, paramhandler: InvocationHandler): Object | null;
    private constructor()
}