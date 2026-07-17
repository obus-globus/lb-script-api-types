import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export class ClassReference$Companion extends Object {
    // private FUNCTION_CLASSES: JavaMap<Class<Function<Object>>, number>;
    // private classFqNameOf(type: string): string | null;
    getClassQualifiedName(jClass: Class<Object>): string | null;
    getClassSimpleName(jClass: Class<Object>): string | null;
    isInstance(value: Object | null, jClass: Class<Object>): boolean;
    // private simpleNameOf(type: string): string | null;
}