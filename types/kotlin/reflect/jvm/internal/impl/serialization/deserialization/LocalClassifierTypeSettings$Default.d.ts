import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalClassifierTypeSettings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/LocalClassifierTypeSettings.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class LocalClassifierTypeSettings$Default extends Object implements LocalClassifierTypeSettings {
    static INSTANCE: LocalClassifierTypeSettings$Default;
    private constructor()
    getReplacementTypeForLocalClassifiers(): SimpleType;
}