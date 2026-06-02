import type { Object } from '../../../java/lang/Object.d.ts'
import type { DOMStringList } from '../../../org/w3c/dom/DOMStringList.d.ts'
export interface DOMConfiguration extends Object{
    canSetParameter(arg0: string, arg1: Object): boolean;
    getParameter(arg0: string): Object;
    getParameterNames(): DOMStringList;
    setParameter(arg0: string, arg1: Object): void;
}