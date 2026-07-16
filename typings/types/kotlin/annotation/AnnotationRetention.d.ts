import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class AnnotationRetention extends Enum<AnnotationRetention> implements Serializable {
    static BINARY: AnnotationRetention;
    static RUNTIME: AnnotationRetention;
    static SOURCE: AnnotationRetention;
    static getEntries(): AnnotationRetention[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AnnotationRetention;
    static values(): AnnotationRetention[];
    private constructor()
    name(): "SOURCE" | "BINARY" | "RUNTIME";
}