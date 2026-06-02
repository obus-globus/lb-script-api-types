import type { ReflectionAccessFilter$FilterResult } from '../../../com/google/gson/ReflectionAccessFilter$FilterResult.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ReflectionAccessFilter extends Object{
    check(arg0: Class<Object>): ReflectionAccessFilter$FilterResult;
}