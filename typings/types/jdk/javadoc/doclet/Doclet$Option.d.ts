import type { Doclet$Option$Kind } from '../../../jdk/javadoc/doclet/Doclet$Option$Kind.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Doclet$Option extends Object{
    getArgumentCount(): number;
    getDescription(): string;
    getKind(): Doclet$Option$Kind;
    getNames(): string[];
    getParameters(): string;
    process(arg0: string, arg1: string[]): boolean;
}