import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StackLocator extends Object {
    static getInstance(): StackLocator;
    private constructor()
    calcLocation(fqcnOfLogger: string): StackTraceElement;
    getCallerClass(anchor: Class<Object>): Class<Object>;
    getCallerClass(sentinelClass: Class<Object>, callerPredicate: (param0: Class<Object>) => kotlin.Boolean): Class<Object>;
    getCallerClass(depth: number): Class<Object>;
    getCallerClass(fqcn: string, pkg: string): Class<Object>;
    getCurrentStackTrace(): Class<Object>[];
    getStackTraceElement(depth: number): StackTraceElement;
}