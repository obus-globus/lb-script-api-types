import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ProcessingEnvironment } from '../../../../../javax/annotation/processing/ProcessingEnvironment.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IMixinAnnotationProcessor$CompilerEnvironment extends Enum<IMixinAnnotationProcessor$CompilerEnvironment> {
    static IDEA: IMixinAnnotationProcessor$CompilerEnvironment;
    static JAVAC: IMixinAnnotationProcessor$CompilerEnvironment;
    static JDT: IMixinAnnotationProcessor$CompilerEnvironment;
    static detect(paramarg0: ProcessingEnvironment): IMixinAnnotationProcessor$CompilerEnvironment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IMixinAnnotationProcessor$CompilerEnvironment;
    static values(): IMixinAnnotationProcessor$CompilerEnvironment[];
    constructor(arg2: boolean, arg3: string, arg4: any)
    readonly friendlyName: string;
    // private isDevelopmentEnvironment: boolean;
    getFriendlyName(): string;
    isCompiler(): boolean;
    isDetected(arg0: ProcessingEnvironment): boolean;
    isDevelopmentEnvironment(): boolean;
    name(): "JAVAC" | "JDT" | "IDEA";
}