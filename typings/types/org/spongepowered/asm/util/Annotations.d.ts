import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IAnnotationHandle } from '../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class Annotations extends Object {
    static get(paramarg0: AnnotationNode[], paramarg1: string): AnnotationNode;
    static getDesc(paramarg0: Class<Annotation>): string;
    static getInvisible(paramarg0: ClassNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getInvisible(paramarg0: FieldNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getInvisible(paramarg0: MethodNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getInvisibleParameter(paramarg0: MethodNode, paramarg1: Class<Annotation>, paramarg2: number): AnnotationNode;
    static getParameter(paramarg0: AnnotationNode[][], paramarg1: string, paramarg2: number): AnnotationNode;
    static getSimpleName(paramarg0: Class<Annotation>): string;
    static getSimpleName(paramarg0: AnnotationNode): string;
    static getSingleInvisible(paramarg0: MethodNode, ...paramarg1: Class<Annotation>[]): AnnotationNode;
    static getSingleVisible(paramarg0: MethodNode, ...paramarg1: Class<Annotation>[]): AnnotationNode;
    static getValue<T extends Enum<T>>(paramarg0: AnnotationNode, paramarg1: string, paramarg2: Class<T>, paramarg3: T): T;
    static getValue<T extends Enum<T>>(paramarg0: AnnotationNode, paramarg1: string, paramarg2: boolean, paramarg3: Class<T>): T[];
    static getValue<T extends unknown>(paramarg0: AnnotationNode): T;
    static getValue<T extends unknown>(paramarg0: AnnotationNode, paramarg1: string): T;
    static getValue<T extends unknown>(paramarg0: AnnotationNode, paramarg1: string, paramarg2: T): T;
    static getValue<T extends unknown>(paramarg0: AnnotationNode, paramarg1: string, paramarg2: Class<Object>): T;
    static getValue<T extends unknown>(paramarg0: AnnotationNode, paramarg1: string, paramarg2: boolean): T[];
    static getVisible(paramarg0: ClassNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getVisible(paramarg0: FieldNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getVisible(paramarg0: MethodNode, paramarg1: Class<Annotation>): AnnotationNode;
    static getVisibleParameter(paramarg0: MethodNode, paramarg1: Class<Annotation>, paramarg2: number): AnnotationNode;
    static handleOf(paramarg0: Object): IAnnotationHandle;
    static merge(paramarg0: ClassNode, paramarg1: ClassNode): void;
    static merge(paramarg0: FieldNode, paramarg1: FieldNode): void;
    static merge(paramarg0: MethodNode, paramarg1: MethodNode): void;
    static setInvisible(paramarg0: FieldNode, paramarg1: Class<Annotation>, ...paramarg2: Object[]): void;
    static setInvisible(paramarg0: MethodNode, paramarg1: Class<Annotation>, ...paramarg2: Object[]): void;
    static setValue(paramarg0: AnnotationNode, paramarg1: string, paramarg2: Object): void;
    static setVisible(paramarg0: FieldNode, paramarg1: Class<Annotation>, ...paramarg2: Object[]): void;
    static setVisible(paramarg0: MethodNode, paramarg1: Class<Annotation>, ...paramarg2: Object[]): void;
    private constructor()
}