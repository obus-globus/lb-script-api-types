import type { Locale } from '../../../java/util/Locale.d.ts'
import type { SourceVersion } from '../../../javax/lang/model/SourceVersion.d.ts'
import type { Doclet$Option } from '../../../jdk/javadoc/doclet/Doclet$Option.d.ts'
import type { DocletEnvironment } from '../../../jdk/javadoc/doclet/DocletEnvironment.d.ts'
import type { Reporter } from '../../../jdk/javadoc/doclet/Reporter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Doclet extends Object{
    getName(): string;
    getSupportedOptions(): Doclet$Option[];
    getSupportedSourceVersion(): SourceVersion;
    init(arg0: Locale, arg1: Reporter): void;
    run(arg0: DocletEnvironment): boolean;
}