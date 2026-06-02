import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JvmAbi extends Object {
    static INSTANCE: JvmAbi;
    static JVM_FIELD_ANNOTATION_CLASS_ID: ClassId;
    static JVM_FIELD_ANNOTATION_FQ_NAME: FqName;
    static getterName(paramarg0: string): string;
    static isGetterName(paramarg0: string): boolean;
    static isSetterName(paramarg0: string): boolean;
    static setterName(paramarg0: string): string;
    static startsWithIsPrefix(paramarg0: string): boolean;
    private constructor()
    getREPEATABLE_ANNOTATION_CONTAINER_META_ANNOTATION(): ClassId;
}