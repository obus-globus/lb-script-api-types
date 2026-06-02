import type { FieldAttributes } from '../../../com/google/gson/FieldAttributes.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExclusionStrategy extends Object{
    shouldSkipClass(arg0: Class<Object>): boolean;
    shouldSkipField(arg0: FieldAttributes): boolean;
}