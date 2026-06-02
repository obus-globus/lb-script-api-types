import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static exists(paramresourceName: string): boolean;
    static getRequiredStream(paramroot: Class<Object>, paramresourceName: string): InputStream;
    static getRequiredStream(paramloader: ClassLoader, paramresourceName: string): InputStream;
    static getRequiredStream(paramresourceName: string): InputStream;
    static getStream(paramroot: Class<Object>, paramresourceName: string): InputStream;
    static getStream(paramloader: ClassLoader, paramresourceName: string): InputStream;
    static getStream(paramresourceName: string): InputStream;
    constructor()
}