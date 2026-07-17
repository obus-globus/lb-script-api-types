import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Ref extends Object{
    getBaseTypeName(): string;
    getObject(): Object;
    getObject(arg0: JavaMap<string, Class<Object>>): Object;
    setObject(arg0: Object): void;
}