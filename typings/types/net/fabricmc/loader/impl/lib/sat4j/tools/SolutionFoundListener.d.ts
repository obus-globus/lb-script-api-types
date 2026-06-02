import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface SolutionFoundListener extends Object{
    onSolutionFound(arg0: number[]): void;
    onUnsatTermination(): void;
}