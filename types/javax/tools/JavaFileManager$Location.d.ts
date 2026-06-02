import type { Object } from '../../java/lang/Object.d.ts'
export interface JavaFileManager$Location extends Object{
    getName(): string;
    isModuleOrientedLocation(): boolean;
    isOutputLocation(): boolean;
}