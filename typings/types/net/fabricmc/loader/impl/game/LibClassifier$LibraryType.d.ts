import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
export interface LibClassifier$LibraryType extends Object{
    getPaths(): string[];
    isApplicable(arg0: EnvType): boolean;
}