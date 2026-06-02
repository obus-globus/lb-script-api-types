import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FieldAttributes } from '../../../../../../org/spongepowered/include/com/google/gson/FieldAttributes.d.ts'
export interface ExclusionStrategy extends Object{
    shouldSkipClass(arg0: Class<Object>): boolean;
    shouldSkipField(arg0: FieldAttributes): boolean;
}