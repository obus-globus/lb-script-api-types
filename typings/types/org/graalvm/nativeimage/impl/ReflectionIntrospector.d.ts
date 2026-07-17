import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReflectionIntrospector extends Object{
    isInvocable(executable: Executable): boolean;
}