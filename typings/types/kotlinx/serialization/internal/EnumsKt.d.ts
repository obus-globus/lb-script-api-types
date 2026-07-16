import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class EnumsKt extends Object {
    static createAnnotatedEnumSerializer<T extends Enum<T>>(serialName: string, values: T[], names: (string | null)[], entryAnnotations: (Annotation[] | null)[], classAnnotations: Annotation[] | null): KSerializer<T>;
    static createMarkedEnumSerializer<T extends Enum<T>>(serialName: string, values: T[], names: (string | null)[], annotations: (Annotation[] | null)[]): KSerializer<T>;
    static createSimpleEnumSerializer<T extends Enum<T>>(serialName: string, values: T[]): KSerializer<T>;
}