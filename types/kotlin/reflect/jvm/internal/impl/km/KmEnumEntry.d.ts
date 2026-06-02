import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmEnumEntryExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmEnumEntryExtension.d.ts'
export class KmEnumEntry extends Object {
    constructor(arg0: string)
    readonly annotations: KmAnnotation[];
    // private extensions: KmEnumEntryExtension[];
    // private name: string;
    getAnnotations(): KmAnnotation[];
    toString(): string;
}