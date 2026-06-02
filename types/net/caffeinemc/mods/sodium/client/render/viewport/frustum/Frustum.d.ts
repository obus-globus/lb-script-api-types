import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface Frustum extends Object{
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testSection(arg0: number, arg1: number, arg2: number): boolean;
    testSectionExpanded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}