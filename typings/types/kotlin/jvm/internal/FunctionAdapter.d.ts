import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
export interface FunctionAdapter extends Object{
    getFunctionDelegate(): Function<Object>;
}