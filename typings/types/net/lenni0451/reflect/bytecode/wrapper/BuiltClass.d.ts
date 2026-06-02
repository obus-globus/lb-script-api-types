import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BuiltClass extends Object{
    defineAnonymous(arg0: Class<Object>): Class<Object>;
    defineMetafactory(arg0: Class<Object>): Class<Object>;
    getName(): string;
    toBytes(): number[];
}