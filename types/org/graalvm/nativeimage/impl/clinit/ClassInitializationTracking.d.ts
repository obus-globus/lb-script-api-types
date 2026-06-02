import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassInitializationTracking extends Object {
    static initializedClasses: Map<Object | null, (Object | null)[]>;
    static instantiatedObjects: Map<Object, (Object | null)[]>;
    static reportClassInitialized(paramclazz: Class<Object>, paramstackTrace: (Object | null)[]): void;
    static reportObjectInstantiated(paramo: Object, paramstackTrace: (Object | null)[]): void;
    constructor()
}