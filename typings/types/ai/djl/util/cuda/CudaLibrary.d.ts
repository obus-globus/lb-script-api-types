import type { Library } from '../../../../com/sun/jna/Library.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CudaLibrary extends Library, Object{
    cudaDeviceGetAttribute(arg0: number[], arg1: number, arg2: number): number;
    cudaGetDevice(arg0: number[]): number;
    cudaGetDeviceCount(arg0: number[]): number;
    cudaGetErrorString(arg0: number): string;
    cudaMemGetInfo(arg0: number[], arg1: number[]): number;
    cudaRuntimeGetVersion(arg0: number[]): number;
    cudaSetDevice(arg0: number): number;
}