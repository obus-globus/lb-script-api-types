import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StackLocatorUtil extends Object {
    static calcLocation(paramfqcnOfLogger: string): StackTraceElement;
    static getCallerClass(paramdepth: number): Class<Object>;
    static getCallerClass(paramanchor: Class<Object>): Class<Object>;
    static getCallerClass(paramsentinelClass: Class<Object>, paramcallerPredicate: (param0: Class<Object>) => boolean): Class<Object>;
    static getCallerClass(paramfqcn: string): Class<Object>;
    static getCallerClass(paramfqcn: string, parampkg: string): Class<Object>;
    static getCallerClassLoader(paramdepth: number): ClassLoader;
    static getCurrentStackTrace(): Class<Object>[];
    static getStackTraceElement(paramdepth: number): StackTraceElement;
    private constructor()
}