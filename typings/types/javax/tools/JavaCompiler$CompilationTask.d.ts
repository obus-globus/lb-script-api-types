import type { Locale } from '../../java/util/Locale.d.ts'
import type { Callable } from '../../java/util/concurrent/Callable.d.ts'
import type { Processor } from '../../javax/annotation/processing/Processor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JavaCompiler$CompilationTask extends Callable<boolean>, Object{
    addModules(arg0: string[]): void;
    call(): boolean;
    setLocale(arg0: Locale): void;
    setProcessors(arg0: Processor[]): void;
}