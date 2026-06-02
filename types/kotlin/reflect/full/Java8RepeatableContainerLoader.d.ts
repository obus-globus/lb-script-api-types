import type { Class } from '../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Java8RepeatableContainerLoader$Cache } from '../../../kotlin/reflect/full/Java8RepeatableContainerLoader$Cache.d.ts'
export class Java8RepeatableContainerLoader extends Object {
    static INSTANCE: Java8RepeatableContainerLoader;
    // private cache: Java8RepeatableContainerLoader$Cache | null;
    // private buildCache(): Java8RepeatableContainerLoader$Cache;
    loadRepeatableContainer(klass: Class<Annotation>): Class<Annotation> | null;
}