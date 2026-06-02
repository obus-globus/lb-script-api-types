import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Ref extends Object{
    getBaseTypeName(): string;
    getObject(): Object;
    getObject(arg0: { [key: string]: Class<Object> }): Object;
    setObject(arg0: Object): void;
}