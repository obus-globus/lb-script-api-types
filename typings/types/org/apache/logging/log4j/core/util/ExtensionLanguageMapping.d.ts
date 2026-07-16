import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ExtensionLanguageMapping extends Enum<ExtensionLanguageMapping> {
    static AWK: ExtensionLanguageMapping;
    static BEANSHELL: ExtensionLanguageMapping;
    static BSH: ExtensionLanguageMapping;
    static CLJ: ExtensionLanguageMapping;
    static EJS: ExtensionLanguageMapping;
    static FREEMARKER: ExtensionLanguageMapping;
    static FTL: ExtensionLanguageMapping;
    static GROOVY: ExtensionLanguageMapping;
    static GVY: ExtensionLanguageMapping;
    static HS: ExtensionLanguageMapping;
    static JAVASCRIPT: ExtensionLanguageMapping;
    static JELLY: ExtensionLanguageMapping;
    static JEP: ExtensionLanguageMapping;
    static JEXL: ExtensionLanguageMapping;
    static JEXL2: ExtensionLanguageMapping;
    static JS: ExtensionLanguageMapping;
    static JUDI: ExtensionLanguageMapping;
    static JUDO: ExtensionLanguageMapping;
    static JY: ExtensionLanguageMapping;
    static JYTHON: ExtensionLanguageMapping;
    static RB: ExtensionLanguageMapping;
    static RUBY: ExtensionLanguageMapping;
    static SCALA: ExtensionLanguageMapping;
    static TCL: ExtensionLanguageMapping;
    static VELOCITY: ExtensionLanguageMapping;
    static VM: ExtensionLanguageMapping;
    static getByExtension(paramextension: string): ExtensionLanguageMapping;
    static getByLanguage(paramlanguage: string): ExtensionLanguageMapping[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ExtensionLanguageMapping;
    static values(): ExtensionLanguageMapping[];
    private constructor(extension: string, language: string)
    readonly extension: string;
    readonly language: string;
    getExtension(): string;
    getLanguage(): string;
    name(): "JS" | "JAVASCRIPT" | "GVY" | "GROOVY" | "BSH" | "BEANSHELL" | "JY" | "JYTHON" | "FTL" | "FREEMARKER" | "VM" | "VELOCITY" | "AWK" | "EJS" | "TCL" | "HS" | "JELLY" | "JEP" | "JEXL" | "JEXL2" | "RB" | "RUBY" | "JUDO" | "JUDI" | "SCALA" | "CLJ";
}