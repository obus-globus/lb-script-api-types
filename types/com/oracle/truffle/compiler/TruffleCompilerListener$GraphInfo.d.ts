import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleCompilerListener$GraphInfo extends Object{
    getNodeCount(): number;
    getNodeTypes(simpleNames: boolean): string[];
}