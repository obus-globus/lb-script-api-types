import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUData extends Object {
    static ICU_BASE_NAME: string;
    static ICU_BRKITR_BASE_NAME: string;
    static ICU_BRKITR_NAME: string;
    static ICU_BUNDLE: string;
    static ICU_COLLATION_BASE_NAME: string;
    static ICU_CURR_BASE_NAME: string;
    static ICU_LANG_BASE_NAME: string;
    static ICU_RBNF_BASE_NAME: string;
    static ICU_REGION_BASE_NAME: string;
    static ICU_TRANSLIT_BASE_NAME: string;
    static ICU_UNIT_BASE_NAME: string;
    static ICU_ZONE_BASE_NAME: string;
    static exists(paramarg0: string): boolean;
    static getRequiredStream(paramarg0: Class<Object>, paramarg1: string): InputStream;
    static getRequiredStream(paramarg0: ClassLoader, paramarg1: string): InputStream;
    static getRequiredStream(paramarg0: string): InputStream;
    static getStream(paramarg0: Class<Object>, paramarg1: string): InputStream;
    static getStream(paramarg0: ClassLoader, paramarg1: string): InputStream;
    static getStream(paramarg0: string): InputStream;
    constructor()
}