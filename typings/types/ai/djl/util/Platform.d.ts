import type { Object } from '../../../java/lang/Object.d.ts'
export class Platform extends Object {
    static detectPlatform(paramarg0: string): Platform;
    static detectPlatform(paramarg0: string, paramarg1: string): Platform;
    static fromSystem(paramarg0: string): Platform;
    private constructor()
    readonly apiVersion: string;
    readonly cudaArch: string;
    readonly flavor: string;
    readonly libraries: string[];
    readonly osArch: string;
    readonly osPrefix: string;
    readonly placeholder: boolean;
    readonly version: string;
    getApiVersion(): string;
    getClassifier(): string;
    getCudaArch(): string;
    getFlavor(): string;
    getLibraries(): string[];
    getOsArch(): string;
    getOsPrefix(): string;
    getVersion(): string;
    isPlaceholder(): boolean;
    matches(arg0: Platform): boolean;
    toString(): string;
}