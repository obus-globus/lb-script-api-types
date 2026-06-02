import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class AnnotationRetention extends Enum<AnnotationRetention> implements Serializable {
    static BINARY: AnnotationRetention;
    static RUNTIME: AnnotationRetention;
    static SOURCE: AnnotationRetention;
    static getEntries(): AnnotationRetention[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnnotationRetention;
    static values(): (Object | null)[];
    private constructor()
    name(): "SOURCE" | "BINARY" | "RUNTIME";
}