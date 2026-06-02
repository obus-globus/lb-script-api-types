import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { AnnotationMirror } from '../../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { IAnnotationHandle } from '../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class AnnotationHandle extends Object implements IAnnotationHandle {
    static MISSING: AnnotationHandle;
    static asMirror(paramarg0: IAnnotationHandle): AnnotationMirror;
    static of(paramarg0: AnnotationMirror): AnnotationHandle;
    static of(paramarg0: Element, paramarg1: Class<Object>): AnnotationHandle;
    private constructor(arg0: AnnotationMirror)
    // private annotation: AnnotationMirror;
    asMirror(): AnnotationMirror;
    exists(): boolean;
    getAnnotation(arg0: string): IAnnotationHandle;
    getAnnotationList(arg0: string): IAnnotationHandle[];
    getAnnotationValue(arg0: string): AnnotationValue;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getDesc(): string;
    getList(): T[];
    getList(arg0: string): T[];
    getTypeList(arg0: string): Type[];
    getTypeValue(arg0: string): Type;
    getValue<T extends Object | number | string | boolean>(): T;
    getValue<T extends Object | number | string | boolean>(arg0: string): T;
    getValue<T extends Object | number | string | boolean>(arg0: string, arg1: T): T;
    toString(): string;
}