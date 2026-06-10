import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
export interface IAnnotationHandle extends Object{
    exists(): boolean;
    getAnnotation(arg0: string): IAnnotationHandle;
    getAnnotationList(arg0: string): IAnnotationHandle[];
    getBoolean(arg0: string, arg1: boolean): boolean;
    getDesc(): string;
    getList<T extends Object | number | string | boolean>(): T[];
    getList<T extends Object | number | string | boolean>(arg0: string): T[];
    getTypeList(arg0: string): Type[];
    getTypeValue(arg0: string): Type;
    getValue<T extends Object | number | string | boolean>(): T;
    getValue<T extends Object | number | string | boolean>(arg0: string): T;
    getValue<T extends Object | number | string | boolean>(arg0: string, arg1: T): T;
}