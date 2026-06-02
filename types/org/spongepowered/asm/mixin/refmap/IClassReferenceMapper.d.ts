import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IClassReferenceMapper extends Object{
    remapClassName(arg0: string, arg1: string): string;
    remapClassNameWithContext(arg0: string, arg1: string, arg2: string): string;
}