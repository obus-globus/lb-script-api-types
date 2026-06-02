import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClassProvider extends Object{
    findAgentClass(arg0: string, arg1: boolean): Class<Object>;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: boolean): Class<Object>;
    getClassPath(): URL[];
}