import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassInitializationTracking extends Object {
    static initializedClasses: Map<Class<Object>, StackTraceElement[]>;
    static instantiatedObjects: Map<Object, StackTraceElement[]>;
    static reportClassInitialized(paramclazz: Class<Object>, paramstackTrace: StackTraceElement[]): void;
    static reportObjectInstantiated(paramo: Object, paramstackTrace: StackTraceElement[]): void;
    constructor()
}