import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassInitializationTracking extends Object {
    static initializedClasses: JavaMap<Class<Object>, StackTraceElement[]>;
    static instantiatedObjects: JavaMap<Object, StackTraceElement[]>;
    static reportClassInitialized(paramclazz: Class<Object>, paramstackTrace: StackTraceElement[]): void;
    static reportObjectInstantiated(paramo: Object, paramstackTrace: StackTraceElement[]): void;
    constructor()
}