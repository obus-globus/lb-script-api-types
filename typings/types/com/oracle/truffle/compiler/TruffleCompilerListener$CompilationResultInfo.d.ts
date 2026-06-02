import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleCompilerListener$CompilationResultInfo extends Object{
    getCompilationId(): number;
    getDataPatchesCount(): number;
    getExceptionHandlersCount(): number;
    getInfopoints(): string[];
    getInfopointsCount(): number;
    getMarksCount(): number;
    getTargetCodeSize(): number;
    getTotalFrameSize(): number;
}