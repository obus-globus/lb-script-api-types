import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class JavaFileObject$Kind extends Enum<JavaFileObject$Kind> {
    static CLASS: JavaFileObject$Kind;
    static HTML: JavaFileObject$Kind;
    static OTHER: JavaFileObject$Kind;
    static SOURCE: JavaFileObject$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JavaFileObject$Kind;
    static values(): JavaFileObject$Kind[];
    private constructor(arg2: string)
    extension: string;
    name(): "SOURCE" | "CLASS" | "HTML" | "OTHER";
}