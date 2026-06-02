import type { ExclusionStrategy } from '../../../../../../com/google/gson/ExclusionStrategy.d.ts'
import type { FieldAttributes } from '../../../../../../com/google/gson/FieldAttributes.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExcludeStrategy extends Object implements ExclusionStrategy {
    static INSTANCE: ExcludeStrategy;
    shouldSkipClass(clazz: Class<Object> | null): boolean;
    shouldSkipField(field: FieldAttributes): boolean;
}