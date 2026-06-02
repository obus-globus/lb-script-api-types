import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ParameterMetaData extends Wrapper, Object{
    getParameterClassName(arg0: number): string;
    getParameterCount(): number;
    getParameterMode(arg0: number): number;
    getParameterType(arg0: number): number;
    getParameterTypeName(arg0: number): string;
    getPrecision(arg0: number): number;
    getScale(arg0: number): number;
    isNullable(arg0: number): number;
    isSigned(arg0: number): boolean;
}