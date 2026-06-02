import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FuturesGetChecked$GetCheckedTypeValidator extends Object{
    validateClass(exceptionClass: Class<Exception>): void;
}