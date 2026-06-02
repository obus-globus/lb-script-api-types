import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export interface CConstantValueSupport extends Object{
    getCConstantValue<T extends Object | number | string | boolean>(declaringClass: Class<Object>, methodName: string, returnType: Class<T>): T;
    getCEnumValue<T extends Object | number | string | boolean>(cEnum: Enum<Object>, methodName: string): T;
}