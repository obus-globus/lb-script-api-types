import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotationElement } from '../../../jdk/jfr/AnnotationElement.d.ts'
import type { ValueDescriptor } from '../../../jdk/jfr/ValueDescriptor.d.ts'
import type { AnnotationConstruct } from '../../../jdk/jfr/internal/AnnotationConstruct.d.ts'
import type { LogLevel } from '../../../jdk/jfr/internal/LogLevel.d.ts'
import type { LogTag } from '../../../jdk/jfr/internal/LogTag.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Type extends Object implements Comparable<Type> {
    static EVENT_NAME_PREFIX: string;
    static SETTINGS_PREFIX: string;
    static STACK_TRACE: Type;
    static SUPER_TYPE_ANNOTATION: string;
    static SUPER_TYPE_EVENT: string;
    static SUPER_TYPE_SETTING: string;
    static TYPES_PREFIX: string;
    static getKnownType(paramarg0: Class<Object>): Type;
    static getKnownType(paramarg0: string): Type;
    static getTypeId(paramarg0: Class<Object>): number;
    static isValidJavaFieldType(paramarg0: string): boolean;
    constructor(arg0: string, arg1: string, arg2: number)
    constructor(arg0: string, arg1: string, arg2: number, arg3: boolean)
    // private annos: AnnotationConstruct;
    readonly fields: ValueDescriptor[];
    readonly id: number;
    readonly internal: boolean;
    readonly name: string;
    readonly remove: boolean;
    readonly simpleType: boolean;
    readonly superType: string;
    readonly visible: boolean;
    add(arg0: ValueDescriptor): void;
    // private calculateSimpleType(): boolean;
    compareTo(arg0: Type): number;
    equals(arg0: Object | null): boolean;
    getAnnotation<T extends unknown>(arg0: Class<Annotation>): T;
    getAnnotationElements(): AnnotationElement[];
    getAnnotationValue<T extends unknown>(arg0: Class<Annotation>, arg1: T): T;
    getDescription(): string;
    getField(arg0: string): ValueDescriptor;
    getFields(): ValueDescriptor[];
    getId(): number;
    getLabel(): string;
    getLogName(): string;
    getName(): string;
    getRemove(): boolean;
    getSuperType(): string;
    hasAnnotation(arg0: Class<Annotation>): boolean;
    hashCode(): number;
    indexOf(arg0: string): number;
    isDefinedByJVM(): boolean;
    isInternal(): boolean;
    isSimpleType(): boolean;
    isVisible(): boolean;
    log(arg0: string, arg1: LogTag, arg2: LogLevel): void;
    setAnnotations(arg0: AnnotationElement[]): void;
    setFields(arg0: ValueDescriptor[]): void;
    setId(arg0: number): void;
    setInternal(arg0: boolean): void;
    setRemove(arg0: boolean): void;
    setVisible(arg0: boolean): void;
    toString(): string;
    trimFields(): void;
    // private typeText(): string;
}