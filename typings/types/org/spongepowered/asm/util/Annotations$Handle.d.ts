import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class Annotations$Handle extends Object implements IAnnotationHandle {
    constructor(arg0: AnnotationNode)
    // private annotation: AnnotationNode;
    exists(): boolean;
    getAnnotation(arg0: string): IAnnotationHandle;
    getAnnotationList(arg0: string): IAnnotationHandle[];
    getBoolean(arg0: string, arg1: boolean): boolean;
    getDesc(): string;
    getList(): T[];
    getList(arg0: string): T[];
    getNode(): AnnotationNode;
    getTypeList(arg0: string): Type[];
    getTypeValue(arg0: string): Type;
    getValue<T extends Object | number | string | boolean>(): T;
    getValue<T extends Object | number | string | boolean>(arg0: string): T;
    getValue<T extends Object | number | string | boolean>(arg0: string, arg1: T): T;
    toString(): string;
}