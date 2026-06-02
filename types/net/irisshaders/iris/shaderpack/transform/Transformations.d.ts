import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Transformations$InjectionPoint } from '../../../../../net/irisshaders/iris/shaderpack/transform/Transformations$InjectionPoint.d.ts'
export interface Transformations extends Object{
    contains(arg0: string): boolean;
    define(arg0: string, arg1: string): void;
    getPrefix(): string;
    injectLine(arg0: Transformations$InjectionPoint, arg1: string): void;
    replaceExact(arg0: string, arg1: string): void;
    replaceRegex(arg0: string, arg1: string): void;
    setPrefix(arg0: string): void;
}